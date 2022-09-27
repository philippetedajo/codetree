import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";

import {
  GoogleAuthInput,
  UserLoginInput,
  UserResponse,
} from "../graphql/generated/graphql";
import { createApolloClient } from "../utils/client";
import axios from "axios";
import Emitter, { EventType } from "../utils/emitter";

interface Auth {
  login: (input: UserLoginInput) => Promise<any>;
  withGoogle: (input: GoogleAuthInput) => Promise<any>;
  logout: () => Promise<void>;
  user: any;
  errors: any;
  isLoading: boolean;
}

const defaultAuth = {
  login: async () => {},
  withGoogle: async () => {},
  logout: async () => {},
  user: null,
  errors: null,
  isLoading: false,
};

const AuthContext = createContext<Auth>(defaultAuth);

export const AuthProvider = ({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: any;
}) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(initialUser);
  const [errors, setErrors] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function login(input: UserLoginInput) {
    setIsLoading(true);
    setUser(null);

    try {
      const res = await axios.post("/api/login", input);
      setUser(res.data);

      if (res.data.status) {
        router.push("/");
      }

      setErrors(null);
      setIsLoading(false);

      return res.data;
    } catch (err) {
      setErrors(err);
      setIsLoading(false);

      return err;
    }
  }

  async function withGoogle(input: GoogleAuthInput) {
    setIsLoading(true);
    setUser(null);

    try {
      const res = await axios.post("/api/oauth/google", input);
      setUser(res.data);

      if (res.data.status) {
        router.push("/");
      }

      setErrors(null);
      setIsLoading(false);

      return res.data;
    } catch (err) {
      setErrors(err);
      setIsLoading(false);

      return err;
    }
  }

  async function logout() {
    try {
      axios.post("/api/logout").then(() => {
        setUser(null);
      });

      router.push("/");
    } catch (err) {
      setErrors(err);
    }
  }

  const onProfileUpdated = async (data: {
    username?: string;
    avatar?: string;
  }) => {
    try {
      await axios.post("/api/updateUser", data);
    } catch (err) {
      console.log(err);
    }

    setUser((prev: UserResponse) => ({
      ...prev,
      data: {
        ...prev.data,
        ...(data.avatar && { avatar: data.avatar }),
        ...(data.username && { username: data.username }),
      },
    }));
  };

  useEffect(() => {
    Emitter.on(EventType.profileUpdated, onProfileUpdated);

    return () => {
      Emitter.off(EventType.profileUpdated, onProfileUpdated);
    };
  });

  const value = useMemo(
    () => ({
      user,
      isLoading,
      errors,
      login,
      withGoogle,
      logout,
    }),
    [user, isLoading, errors, withGoogle]
  );

  return (
    <AuthContext.Provider value={value}>
      <ApolloProvider client={createApolloClient(user?.token)}>
        {children}
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

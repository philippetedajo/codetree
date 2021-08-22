import { useState } from "react";
import axios, { Method } from "axios";

interface UseAxiosProps {
  url: string;
  method?: Method;
  input?: object;
  token?: string;
}

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const getData = ({ url, method = "GET", input, token }: UseAxiosProps) => {
    let header = { "Content-Type": "application/json" };
    if (token) {
      // @ts-ignore
      header["Authorization"] = token;
    }

    setIsLoading(true);

    axios({
      url: url,
      method: method,
      data: input,
      headers: header,
    })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .then((error: any) => {
        setError(error);
        setIsLoading(false);
      });
  };

  // to debugging
  // console.log(data);

  return { getData, data, isLoading, error };
};

import { useState } from "react";
import axios, { Method } from "axios";

interface UseAxiosProps {
  url: string;
  method?: Method;
  input?: object;
  token?: string;
  onSuccess?: (params: any) => void;
  onFail?: (params: any) => void;
}

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const getData = ({
    url,
    method = "GET",
    input,
    token,
    onSuccess,
    onFail,
  }: UseAxiosProps) => {
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
        if (onSuccess) {
          onSuccess(response?.data);
        }
      })
      .then((error: any) => {
        setError(error);
        setIsLoading(false);
        if (onFail) {
          onFail(error);
        }
      });
  };

  // to debugging
  // console.log(data);

  return { getData, data, isLoading, error };
};

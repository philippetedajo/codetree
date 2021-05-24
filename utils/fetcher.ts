import axios, { Method } from "axios";
import { responseType } from "../_types/share_types";

export const fetcher = async (
  url: string,
  method: Method = "GET",
  token?: string | null,
  data?: any
) => {
  let headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = token;

  try {
    const result = await axios({ url, method, headers, data });

    switch (result.data.code) {
      case 200:
        return notifier(responseType.success, result.data);
      case 400:
        return notifier(responseType.error, result.data);
      case 404:
        return notifier(responseType.error, result.data);
      case 500:
        return notifier(responseType.error, result.data);
      default:
        return notifier(responseType.error, result.data);
    }
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
};

function notifier(type: string, data: any) {
  // console.log({ type: type, data: data });
  return { type: type, data: data };
}

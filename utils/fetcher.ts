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

    return notifier(responseType.success, result);
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }

    return notifier(responseType.error, error.response.data);
  }
};

function notifier(type: string, data: any) {
  console.log({ type: type, data: data });
  return { type: type, data: data };
}

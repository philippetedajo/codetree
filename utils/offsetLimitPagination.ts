import { FieldPolicy } from "@apollo/client";

type KeyArgs = FieldPolicy<any>["keyArgs"];

interface Response {
  data: any[];
  message?: string;
  status: boolean;
}

export function offsetLimitPagination(keyArgs: KeyArgs = false): FieldPolicy {
  return {
    keyArgs,
    merge(existing = {} as Response, incoming: Response, { args }) {
      const merged = existing?.data ? existing?.data?.slice(0) : [];

      if (incoming) {
        if (args) {
          // Assume an offset of 0 if args.offset omitted.
          const { offset = 0 } = args?.input;

          for (let i = 0; i < incoming?.data?.length; ++i) {
            merged[offset + i] = incoming?.data[i];
          }
        } else {
          // It's unusual (probably a mistake) for a paginated field not
          // to receive any arguments, so you might prefer to throw an
          // exception here, instead of recovering by appending incoming
          // onto the existing array.
          merged.push.apply(merged, incoming?.data);
        }
      }

      return {
        ...incoming,
        data: merged,
      };
    },
  };
}

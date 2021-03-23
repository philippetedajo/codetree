import { useEffect, useState } from "react";
import bundler from "../bundler";

export const useDebounce = (value: string | undefined, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>("");

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(debounceHandler);
  }, [value, delay]);

  return debouncedValue;
};

export const useDebounceBundler = (
  value: string | undefined,
  delay: number
) => {
  const [debouncedBundlerValue, setDebouncedBundlerValue] = useState<{
    code: string;
    error: string | undefined;
  }>();

  useEffect(() => {
    const debounceBundlerHandler = setTimeout(async () => {
      const output = await bundler(value);
      setDebouncedBundlerValue(output);
    }, delay);

    return () => clearTimeout(debounceBundlerHandler);
  }, [value, delay]);

  return debouncedBundlerValue;
};

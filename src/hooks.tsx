import { useEffect, useState } from "react";
import bundler from "./bundler";

export const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(debounceHandler);
  }, [value, delay]);

  return debouncedValue;
};

export const useDebounceBundler = (value: any, delay: any) => {
  const [debouncedBundlerValue, setDebouncedBundlerValue] = useState<any>();

  useEffect(() => {
    const debounceBundlerHandler = setTimeout(async () => {
      const output = await bundler(value);
      setDebouncedBundlerValue(output);
    }, delay);

    return () => clearTimeout(debounceBundlerHandler);
  }, [value, delay]);

  return debouncedBundlerValue;
};

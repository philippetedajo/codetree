import { useEffect, useState } from "react";
import bundler from "../bundler";

interface LangProps {
  code: string | undefined;
  error: string | undefined;
  loading: boolean;
}

export const useDebounce = (value: string, delay: number, bundle: boolean) => {
  const [debouncedValue, setDebouncedValue] = useState<LangProps>({
    code: "",
    error: "",
    loading: true,
  });

  useEffect(() => {
    const debounceHandler = setTimeout(async () => {
      if (bundle) {
        const output = await bundler(value);
        setDebouncedValue({
          code: output.code,
          error: output.error,
          loading: false,
        });
        return;
      }
      setDebouncedValue({ code: value, error: "", loading: false });
    }, delay);

    return () => clearTimeout(debounceHandler);
  }, [value, delay, bundle]);

  return debouncedValue;
};

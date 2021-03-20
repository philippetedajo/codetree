import { useEffect, useRef } from "react";

export default function useKey(
  key: string,
  callback: (event: KeyboardEvent) => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      if (event.code === key) {
        callbackRef.current(event);
      }
    };

    document.addEventListener("keypress", onKeyPress);
    return () => document.removeEventListener("keypress", onKeyPress);
  }, [key]);
}

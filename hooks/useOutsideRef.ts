import { useEffect, useState } from "react";

const UseOutsideRef = (ref: any) => {
  const [isOutsideRef, setIsOutsideRef] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideRef(true);

        setTimeout(() => {
          setIsOutsideRef(false);
        }, 200);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOutsideRef };
};

export default UseOutsideRef;

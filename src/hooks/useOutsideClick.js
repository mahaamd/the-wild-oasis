import React, { useContext, useEffect, useRef } from "react";

export default function useOutsideClick(close) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      //console.log(e);
      console.log(ref.current);
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => removeEventListener("click", handleClick, true);
  }, [close]);
  return ref;
}

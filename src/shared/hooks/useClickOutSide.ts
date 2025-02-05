import { useEffect } from "react";

function useClickOutSide(
  ref: React.RefObject<HTMLDivElement>, 
  value: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        value(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, value]);
}

export default useClickOutSide;

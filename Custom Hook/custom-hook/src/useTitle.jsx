import { useEffect } from "react";

function useTitle(num) {
  useEffect(() => {
    document.title = `You clicked ${num} times`;
  }, [num]);
}

export default useTitle;

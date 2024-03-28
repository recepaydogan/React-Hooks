import { useState } from "react";

function useCounter(initialValue = 0) {
  const [num, setNum] = useState(initialValue);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);
  const reset = () => setNum(0);

  return [increment, decrement, reset, num];
}

export default useCounter;

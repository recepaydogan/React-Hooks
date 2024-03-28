import useCounter from "./useCounter";

function Counter() {
  const [increment, decrement, reset, num] = useCounter();

  return (
    <>
      <h1> Sayı = {num}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;

import { useContext } from "react";
import { context } from "./App";

function Calculation() {
  const numberContext = useContext(context);
  return (
    <>
      <div>{numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}></button>
      <button onClick={() => numberContext.dispatch("decrement")}></button>
      <button onClick={() => numberContext.dispatch("reset")}></button>
    </>
  );
}

export default Calculation;

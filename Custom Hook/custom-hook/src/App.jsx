import { useState } from "react";

import "./App.css";
import useTitle from "./useTitle";

function App() {
  const [count, setCount] = useState(0);
  useTitle(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>number = {count}</button>
    </>
  );
}

export default App;

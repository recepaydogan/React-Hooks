import { useCallback, useState } from "react";

import "./App.css";
import NumberList from "./numberList";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementValue) => {
      return [number, number + incrementValue + 1, number + incrementValue + 2];
    },
    [number]
  );
  console.log(getItems);
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        value={number}
      />
      <button onClick={() => setDark(!dark)}> change the theme</button>
      <NumberList items={getItems}></NumberList>
    </div>
  );
}

export default App;

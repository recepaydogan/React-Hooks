import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const handleInputValue = (e) => {
    setNumber(e.target.value);
  };
  const handleThemeChanging = () => {
    setTheme(!theme);
  };
  const getNewNumber = (value) => {
    console.log("function is called");
    for (let i = 0; i < 1000000000; i++) {}
    return value * 2;
  };
  let themeColor = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  const newNumber = useMemo(() => getNewNumber(number), [number]);
  return (
    <>
      <div>
        <input value={number} type="number" onChange={handleInputValue} />
        <button onClick={handleThemeChanging}>Change the theme</button>
      </div>
      <div style={themeColor}>{newNumber}</div>
    </>
  );
}

export default App;

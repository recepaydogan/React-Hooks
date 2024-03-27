import { useState } from "react";
import "./App.css";
import HandleInputDelay from "./components/handleDelay";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <HandleInputDelay number={value}></HandleInputDelay>
    </div>
  );
}

export default App;

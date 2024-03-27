import { useState } from "react";
import "./App.css";
import Search from "./components/searchValue";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>
        <input value={value} onChange={handleChange} placeholder="Search..." />
        <Search inputValue={value}></Search>
      </div>
    </>
  );
}

export default App;

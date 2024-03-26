import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hello ";
    setName(inputRef.current.value);
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>my name is {name}</p>
      <p>I rendered {renderCount.current} times</p>
      <button onClick={focus}> Focus on input</button>
    </>
  );
}

export default App;

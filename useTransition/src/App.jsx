import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [Numbers, setNumbers] = useState([]);
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    const myList = [];
    setNumbers(e.target.value);
    startTransition(() => {
      for (let i = 0; i < 2000; i++) {
        myList.push(e.target.value);
      }
      setList(myList);
    });
  };
  return (
    <>
      <input type="text" value={Numbers} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((number, index) => <div key={index}>{number}</div>)}
    </>
  );
}

export default App;

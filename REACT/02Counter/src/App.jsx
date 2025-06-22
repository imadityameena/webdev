import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);

  //let Counter = 15

  const addValue = () => {
    //Counter = Counter + 1
    setCounter((Counter = Counter + 1));
  };

  const removeValue = () => {
    setCounter((Counter = Counter - 1));
  };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={addValue}>Add Value: {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {Counter}</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="header" style={{ backgroundColor: color }}>
        <h1>Backgroud Color Changer</h1>
        <div className="colorBtn">
          <button onClick={() => {setColor("black")}}>Black</button>
          <button onClick={() => {setColor("blue")}}>Blue</button>
          <button onClick={() => {setColor("white")}}>white</button>
          <button onClick={() => {setColor("orange")}}>Orange</button>
        </div>
      </div>
    </>
  );
}

export default App;
// Learning: That's why we use hook in react as the name suggests the react library is very reactive define once and use everywhere
// in UI with the help of hook.
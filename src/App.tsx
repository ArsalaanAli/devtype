import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TypeArea from "./TypeArea";

function App() {
  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
  };
  return (
    <div>
      <div className="container" onKeyDown={keyDownEvent} tabIndex={0}>
        Yello
      </div>
    </div>
  );
}

export default App;

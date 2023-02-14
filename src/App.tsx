import { useState } from "react";
import TypeArea from "./TypeArea";

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <TypeArea />
    </div>
  );
}

export default App;

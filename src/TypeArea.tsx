import React from "react";

function TypeArea() {
  function KeyDownEvent(event: React.KeyboardEvent<HTMLDivElement>) {
    console.log(event.code);
  }
  return (
    <div
      onKeyDown={() => {
        console.log("asd");
      }}
    >
      Type Here
    </div>
  );
}

export default TypeArea;

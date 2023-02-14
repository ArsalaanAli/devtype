import React, { useState } from "react";

function TypeArea() {
  const [typingText, setTypingText] = useState(
    "The quick brown fox jumps over the lazy dog"
  );

  return (
    <div>
      <h1 className="flex items-center justify-center h-96">{typingText}</h1>
    </div>
  );
}

export default TypeArea;

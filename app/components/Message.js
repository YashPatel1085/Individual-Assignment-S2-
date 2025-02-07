"use client"; // Ensures this component runs on the client side in Next.js
import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("Magic Buttons");

  return (
    <div>
      <h2>{message}</h2>    {/* Displays current message */}
      <button onClick={() => setMessage("You clicked the button!")}>  {/* changes the message when clicked */}
        Click Me
      </button>
    </div>
  );
}

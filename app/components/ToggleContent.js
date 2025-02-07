"use client"; // Ensures this component runs on the client side in Next.js
import { useState } from "react";

export default function ToggleContent() {
  const [show, setShow] = useState(false);  //state to check wheather its show or hidden

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Content
      </button>
      {show && <p>This is some toggled content!</p>}  {/* Renders the content based on the show state */}
    </div>
  );
}

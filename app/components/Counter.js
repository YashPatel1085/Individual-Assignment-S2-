"use client"; // Ensures this component runs on the client side in Next.js
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> {/*add a number by 1 to the total */}
      <button onClick={() => setCount(count - 1)}>Decrement</button> {/*minus a number by 1 to the total */}
    </div>
  );
}

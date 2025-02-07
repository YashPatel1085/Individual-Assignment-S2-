"use client"; // Ensures this component runs on the client side in Next.js
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  //Button Click State
  const [message, setMessage] = useState("");

  //Content Visibility
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h1>Welcome to My Web App</h1>

      {/*Redirects to about and contact page */}
      <nav>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
      < br></br>
      <br></br>


      {/* Counter Section */}
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>


< br></br>
<br></br>
      {/* POPS MESSAGE AFTER CLICKING IT */}
      <div>
        <h2>Magic Buttons</h2>
        <button onClick={() => setMessage("You clicked the button!")}>
          Click Me
        </button>
        <p>{message}</p>
      </div>


      {/*Button for getting hidden message (hidden fact) */}
      <div>
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? "Hide Fact" : "Show Hidden Fact"}
        </button>
        {showContent && <h4>There’s a species of jellyfish called Turritopsis dohrnii, also known as the 'immortal jellyfish,' which can essentially reverse its aging process and start its life cycle anew.</h4>}
      </div>
    </div>
  );
}

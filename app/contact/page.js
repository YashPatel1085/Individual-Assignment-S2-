import Link from "next/link";

export default function Contact() {
  return (
    <div>

      {/* Heading and Contact me info */}
      <h1>Contact Us</h1>
      <h2>Contact Me through Mail.</h2>
      <br></br>
     <h3>Email: Yc12061536@example.com</h3>
      

      {/* redirects back to the home page */}
      <Link href="/">Go Home</Link>
    </div>
  );
}

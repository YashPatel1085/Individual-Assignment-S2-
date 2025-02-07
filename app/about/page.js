import Link from "next/link";

export default function About() {
  return (
    <div>
      
      {/* Heading and about us info */}
      <h1>About Us</h1>
      <h4>Hi, I'm Yash Patel, a student at Humber College, currently studying
        Computer Programming. I am passionate about technology and enjoy learning
        new skills in web development,<br /> especially front-end frameworks like React.
        Apart from coding, I love playing video games and exploring new virtual
        worlds. I'm always looking for ways to combine my interests <br />in tech and
        gaming!</h4>
     
     {/* redirects back to the home page */}
      <Link href="/">Go Home</Link>
    </div>
  );
}

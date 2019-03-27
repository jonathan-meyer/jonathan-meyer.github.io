import Link from "next/link";
import { black } from "ansi-colors";

const headerStyle = {
  borderBottom: "1px solid black",
  margin: 5,
  padding: 5
};

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Jonathan Meyer</h1>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
}

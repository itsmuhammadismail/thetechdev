import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="list-none flex gap-12">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

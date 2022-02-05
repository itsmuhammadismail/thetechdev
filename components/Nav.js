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
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="border btn border-[#333] px-8 py-3">Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

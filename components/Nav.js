import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="list-none flex gap-12">
        <li>
          <Link href="/">
            <a className="hover:text-[#3d8aca]">Home</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/projects">
            <a className="hover:text-[#3d8aca]">Projects</a>
          </Link>
        </li> */}
        <li>
          <Link href="/services">
            <a className="hover:text-[#3d8aca]">Services</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/about">
            <a className="hover:text-[#3d8aca]">About Us</a>
          </Link>
        </li> */}
        <li>
          <Link href="/contact">
            <a className="border btn border-[#333] px-8 py-3">Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

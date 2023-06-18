import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="py-4 px-12 fixed z-[50] w-full bg-white shadow-md">
      <div className="max-w-[70rem] mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <img
              src="/thetechdev.svg"
              alt=""
              className="h-[2rem] md:h-[3rem]"
            />
          </a>
        </Link>
        <Nav />
        <img
          src="/icons/menu.svg"
          className="h-[1.5rem] cursor-pointer block lg:hidden"
          onClick={handleMenu}
        />
      </div>
      {isOpen && <MobileMenu close={handleMenu} />}
    </header>
  );
};

export default Header;

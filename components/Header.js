import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="py-6 px-12">
      <div className="max-w-[70rem] mx-auto flex justify-between items-center">
        <img src="/logo.svg" alt="" className="h-[2rem] md:h-[3rem]" />
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

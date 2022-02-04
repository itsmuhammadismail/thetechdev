import Link from "next/link";

const MobileMenu = ({ close }) => {
  return (
    <div className="mobile-menu">
      <div className="text-white flex flex-col h-full">
        <img
          src="/icons/cross.svg"
          onClick={close}
          className="h-20 self-end cursor-pointer"
        />
        <ul className="flex-1 flex flex-col justify-center items-center text-2xl gap-8">
          <li>
            <img src="" />
          </li>
          <li>
            <Link href="">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

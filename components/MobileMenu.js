import Link from "next/link";

const MobileMenu = ({ close }) => {
  return (
    <div className="mobile-menu">
      <div className="text-white flex flex-col h-full">
        <div className="flex justify-between m-8 mb-0 items-center">
          <img src="/logo2.svg" alt="" className="h-[3rem]" />
          <img
            src="/icons/cross.svg"
            onClick={close}
            className="h-4 cursor-pointer"
          />
        </div>
        <ul className="flex-1 flex flex-col justify-center items-center text-2xl gap-8">
          <li>
            <img src="" />
          </li>
          <li>
            <Link href="">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="text-white">Project</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="text-white">Services</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="text-white">About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

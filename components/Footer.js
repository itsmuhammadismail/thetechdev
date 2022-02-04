import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="px-12">
      <div className="py-16 max-w-[70rem] mx-auto flex justify-center gap-8 flex-wrap">
        <div className="flex-[2]">
          <img src="/logo.svg" alt="" className="h-[3rem]" />
          <p className="max-w-[25rem] min-w-[12rem] mt-4">
            We are Neuronious, a full-service Creative Digital Agency who
            empower ambitious businesses. Our team of experts specialize in All
            Kinds of Websites, Branding and Mobile Aplication.
          </p>
        </div>
        <div className="flex-1 min-w-[10rem]">
          <h5 className="h6 font-semibold ">Quick Links</h5>
          <ul className="mt-4 flex flex-col gap-1">
            <li>
              <Link href="">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Projects</a>
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
        <div className="flex-1 min-w-[12rem]">
          <h5 className="h6 font-semibold">Get in touch</h5>
          <div className="mt-4 flex gap-2">
            <img src="/icons/phone.svg" alt="" />
            <a href="tel:9230010008922" target="_blank" rel="noreferrer">
              +92 300 1008892
            </a>
          </div>
          <div className="flex gap-3 items-center my-4">
            <a
              href="https://www.facebook.com/neuronious"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/facebook.svg" alt="" className="h-[1.5rem]" />
            </a>
            <a
              href="https://www.instagram.com/theneuronious"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/instagram.svg" alt="" className="h-[1.5rem]" />
            </a>
            <a
              href="https://www.linkedin.com/company/neuronious"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/linkedin.svg" alt="" className="h-[1.5rem]" />
            </a>
          </div>
          <div className="">&copy; Neuronious {year}</div>
          <div className="">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

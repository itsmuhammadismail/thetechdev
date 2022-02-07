import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="px-12 bg-[#333333] relative z-[30] ">
      <div className="py-16 max-w-[70rem] mx-auto flex justify-center gap-8 flex-wrap">
        <div className="flex-[2] flex flex-col items-start logo">
          <img src="/logo2.svg" alt="" className="h-[3rem]" />
          <p className="max-w-[25rem] min-w-[12rem] mt-4 text-white">
            We are Neuronious, a full-service Creative Digital Agency who
            empower ambitious businesses. Our team of experts specialize in All
            Kinds of Websites, Branding and Mobile Aplication.
          </p>
        </div>
        <div className="flex-1 min-w-[10rem]">
          <h5 className="h6 font-semibold text-white">Quick Links</h5>
          <ul className="mt-4 flex flex-col gap-1">
            <li>
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-white">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="text-white">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[12rem] flex flex-col logo">
          <h5 className="h6 font-semibold text-white">Get in touch</h5>
          <div className="mt-4 flex gap-2">
            <img src="/icons/phone.svg" alt="" className="h-[1.5rem]" />
            <a
              href="tel:9230010008922"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              +92 300 1008892
            </a>
          </div>
          <div className="flex gap-2 items-center my-4">
            <a
              href="http://wa.me/+923001008922"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/whatsapp.svg" alt="" className="h-[1.5rem]" />
            </a>
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
          <div className="text-white">&copy; Neuronious {year}</div>
          <div className="text-white">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

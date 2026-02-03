"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-2 z-100 shadow-sm bg-white w-[80%] min-w-[320px] max-w-[1200px] mx-auto md:rounded-full rounded-2xl">
      <div className="px-4 sm:px-0 py-2 w-full sm:w-[80%] min-w-[320px] max-w-[1200px] mx-auto flex items-center justify-between mb-10">
        <Link href="/" className="">
          <div className="flex items-center tracking-[5] text-[#7052B4]">
            <h1 className="text-2xl font-black">DECAG</h1>
            <Image
              src="/DECAFINALBOSS.png"
              alt="Decagon Logo"
              width={45}
              height={35}
              className="mr-1"
            />
            <h1 className="text-2xl font-black">N</h1>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-600 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block -ml-10">
          <ul className="flex gap-20 text-gray-600">
            <li>
              <Link href="/" className="hover:text-black duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-black duration-200">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-black duration-200">
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="mailto:decagon.ph@gmail.com"
          className="hidden md:block bg-[#7052B4] px-8 py-2 rounded-full text-white hover:bg-[#5a3e8a] duration-200"
        >
          <button className="cursor-pointer">Email Us</button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white -mt-10">
          <ul className="flex flex-col gap-4 text-gray-600 px-4 py-4 text-center">
            <li>
              <Link
                href="/"
                className="hover:text-black duration-200 block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-black duration-200 block"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-black duration-200 block"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="mailto:decagon.ph@gmail.com"
                className="hover:text-black duration-200 block bg-[#7052B4] px-4 py-2 rounded-full text-white"
                onClick={() => setIsOpen(false)}
              >
                Email Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

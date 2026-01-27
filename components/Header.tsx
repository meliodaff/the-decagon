import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="p-4 w-[80%] min-w-[320px] max-w-[1200px] mx-auto border-2 grid grid-cols-2 items-center mb-10">
        <Link href="/">
          <div>
            <h1 className="text-3xl font-bold">DECAGON</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex justify-around text-gray-600">
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
      </div>
    </header>
  );
};

export default Header;

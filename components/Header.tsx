"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`text-white flex m-auto mb-10 py-1 fixed z-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-[#101010]" : "bg-transparent"
      }`}
      style={{ pointerEvents: "none" }}
    >
      <div className="flex w-[50%] items-center pl-10">
        <Link
          href="/"
          className="flex items-center"
          style={{ pointerEvents: "auto" }}
        >
          <img
            src="Decagon Logo.png"
            alt="Decagon Logo"
            width={50}
            height={50}
            className="ml-5 mr-4"
          />
          <h1 className="text-3xl font-bold">DECAGON</h1>
        </Link>
      </div>
      <nav
        className="w-[50%] flex items-center "
        style={{ pointerEvents: "auto" }}
      >
        <ul className="flex w-full justify-evenly">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#services">Our Services</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
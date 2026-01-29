import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="sticky top-0  z-100 shadow-sm bg-white">
      <div className="px-4 py-2 w-[80%] min-w-[320px] max-w-[1200px] mx-auto grid grid-cols-2 items-center mb-10 ">
        <Link href="/">
          <div className="flex items-center tracking-[5]">
            <h1 className="text-3xl font-black">DECAG</h1>
            <Image
              src="/DECAFINALBOSS.png"
              alt="Decagon Logo"
              width={45}
              height={35}
              className="mx-2"
            />
            <h1 className="text-3xl font-black">N</h1>
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

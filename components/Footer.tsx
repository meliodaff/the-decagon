import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 px-30">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="pl-13 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="mailto:decagon.ph@gmail.com">
          <Image
            src="at-solid-full.svg"
            alt="Email Icon"
            width={24}
            height={24}
          />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

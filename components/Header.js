import Link from "next/link";

function Header() {
  return (
    <header className="text-white sticky top-0 z-10 bg-[#849de2]">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img src="logo.png" height="60px" width="160px" alt="" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/services"} className="mr-8 hover:text-[#b1c2f2]">
            Services
          </Link>
          <Link href={"/about"} className="mr-8 hover:text-[#b1c2f2]">
            About Us
          </Link>
          <Link href={""} className="mr-8 hover:text-[#b1c2f2]">
            Work
          </Link>
        </nav>
        <Link
          href={"/contact"}
          className="inline-flex items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 rounded text-base mt-4 md:mt-0"
        >
          Talk To Us
        </Link>
      </div>
    </header>
  );
}

export default Header;

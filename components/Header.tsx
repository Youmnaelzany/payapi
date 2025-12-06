import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { NAVIGATION } from "./Footer";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Wrapper className="bg-[#EDF3F8] fixed top-0 left-0 right-0 py-6 flex items-center justify-between border-b border-[#1B262F]/50">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-16">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo.svg"
            alt="PayApi Logo"
            width={135}
            height={38}
          />
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {NAVIGATION.map((nav) => (
              <li key={nav.id}>
                <Link
                  href={nav.href}
                  className="text-[#36536B] opacity-70 font-bold font-public-sans tracking-normal leading-[auto] text-[0.9375rem] hover:opacity-100 ease-in-out duration-500 transition-all"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Button
        variant={"primary"}
        size={"lg"}
        type="button"
        className="md:block hidden"
      >
        Schedule a Demo
      </Button>
    </Wrapper>
  );
};
export default Header;

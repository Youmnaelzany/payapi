import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { NAVIGATION } from "./Footer";
import { Button } from "./ui/button";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <Wrapper className="bg-[#EDF3F8] fixed top-0 left-0 right-0 py-6 border-b border-[#1B262F]/50 w-full z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10 md:gap-16">
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
        <div className="flex items-center gap-4">
          <Button
            variant={"primary"}
            size={"lg"}
            type="button"
            className="hidden md:flex"
          >
            Schedule a Demo
          </Button>
          <Mobile />
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;

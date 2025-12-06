import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { NAVIGATION } from "@/lib/Concents";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label="Footer"
      className="flex flex-col items-center justify-center gap-10 bg-[#1B262F] py-12 md:flex-row md:justify-between md:py-6"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-16">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo-white.svg"
            alt="PayApi Logo"
            width={135}
            height={38}
          />
        </Link>
        {/* Navigation Links */}
        <nav className="">
          <ul className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {NAVIGATION.map((nav) => (
              <li key={nav.id}>
                <Link
                  href={nav.href}
                  className="font-public-sans text-[0.9375rem] leading-[auto] font-bold tracking-normal text-white opacity-70 transition-all duration-500 ease-in-out hover:opacity-100"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Social Media Links */}
      <ul className="flex items-center gap-6">
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaFacebookSquare className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#DA6D97]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaXTwitter className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#DA6D97]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaLinkedin className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#DA6D97]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
    </Wrapper>
  );
};
export default Footer;

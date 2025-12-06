import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const NAVIGATION = [
  {
    id: 1,
    href: "/pricing",
    label: "Pricing",
  },
  {
    id: 2,
    href: "/about",
    label: "About",
  },
  {
    id: 3,
    href: "/contact",
    label: "Contact",
  },
];
const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label="Footer"
      className="bg-[#1B262F] flex flex-col items-center gap-10 py-12 md:py-6 justify-center md:flex-row md:justify-between"
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
                  className="text-white opacity-70 font-bold font-public-sans tracking-normal leading-[auto] text-[0.9375rem] hover:opacity-100 ease-in-out duration-500 transition-all"
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
                <FaFacebookSquare className="text-white size-6 hover:text-[#DA6D97] ease-in-out duration-500 transition-all" />
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
                <FaXTwitter className="text-white size-6 hover:text-[#DA6D97] ease-in-out duration-500 transition-all" />
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
                <FaLinkedin className="text-white size-6 hover:text-[#DA6D97] ease-in-out duration-500 transition-all" />
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

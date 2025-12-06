"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAVIGATION } from "@/lib/Concents";
import Mobile from "./Mobile";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Wrapper
      className={`fixed top-0 right-0 left-0 z-50 w-full bg-[#EDF3F8] py-6 transition-all duration-300 ${isScrolled ? "border-b border-[#1B262F]/50" : "border-b border-transparent"}`}
    >
      <div className="flex w-full items-center justify-between">
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
                    className="font-public-sans text-[0.9375rem] leading-[auto] font-bold tracking-normal text-[#36536B] opacity-70 transition-all duration-500 ease-in-out hover:opacity-100"
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

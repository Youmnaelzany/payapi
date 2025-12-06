import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION } from "@/lib/Concents";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Mobile = () => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="-mr-2 p-2">
            <Menu className="size-7 text-[#36536B]" />
          </button>
        </SheetTrigger>
        <SheetContent className="overflow-hidden bg-[#1B262F] py-16">
          <SheetHeader>
            <SheetTitle>
              <Separator className="text-[#FBFCFE] opacity-20" />
            </SheetTitle>
            <SheetDescription className="relative py-12">
              <nav className="flex flex-col items-center justify-between gap-8">
                <ul className="flex flex-col items-center justify-between gap-8">
                  {NAVIGATION.map((nav) => (
                    <li key={nav.id}>
                      <Link
                        href={nav.href}
                        className="font-public-sans text-[1.25rem] leading-[auto] font-bold tracking-normal text-white opacity-70 transition-all duration-500 ease-in-out hover:opacity-100"
                      >
                        {nav.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={"primary"}
                  size={"lg"}
                  type="button"
                  className=""
                >
                  Schedule a Demo
                </Button>
                <div className="pointer-events-none absolute -top-[80%] -left-1/4 -z-10 w-[150%] overflow-hidden">
                  <Image
                    src="/shared/desktop/bg-pattern-circle.svg"
                    alt=""
                    width={900}
                    height={900}
                    className="h-auto w-full"
                    aria-hidden="true"
                    priority
                  />
                </div>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Mobile;

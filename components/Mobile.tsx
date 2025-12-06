import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { NAVIGATION } from "./Footer";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
const Mobile = () => {
  return (
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 -mr-2">
            <Menu className="size-7 text-[#36536B]" />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-[#1B262F] py-16 overflow-hidden">
          <SheetHeader>
            <SheetTitle>
              <Separator className="text-[#FBFCFE] opacity-20" />
            </SheetTitle>
            <SheetDescription className="py-12 relative">
              <nav className="flex flex-col items-center justify-between gap-8">
                <ul className="flex flex-col items-center justify-between gap-8">
                  {NAVIGATION.map((nav) => (
                    <li key={nav.id}>
                      <Link
                        href={nav.href}
                        className="text-white opacity-70 font-bold font-public-sans tracking-normal leading-[auto] text-[1.25rem] hover:opacity-100 ease-in-out duration-500 transition-all"
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
                <div className="absolute -top-[80%] -left-1/4 w-[150%] overflow-hidden pointer-events-none -z-10">
                  <Image
                    src="/shared/desktop/bg-pattern-circle.svg"
                    alt=""
                    width={900}
                    height={900}
                    className="w-full h-auto"
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

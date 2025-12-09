import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const WorkWith = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-14 bg-[#1B262F] py-12 md:gap-16 lg:flex-row-reverse lg:justify-between lg:gap-32">
      <div className="grid grid-cols-2 items-center justify-center justify-items-center gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-12">
        <Image
          src="/shared/desktop/tesla.svg"
          alt="tesla"
          width={131}
          height={17}
          className="brightness-0 invert"
        />
        <Image
          src="/shared/desktop/microsoft.svg"
          alt="tesla"
          width={148}
          height={31}
          className="brightness-0 invert"
        />
        <Image
          src="/shared/desktop/hewlett-packard.svg"
          alt="tesla"
          width={142}
          height={27}
          className="brightness-0 invert"
        />
        <Image
          src="/shared/desktop/oracle.svg"
          alt="tesla"
          width={133}
          height={17}
          className="brightness-0 invert"
        />
        <Image
          src="/shared/desktop/google.svg"
          alt="tesla"
          width={97}
          height={33}
          className="brightness-0 invert"
        />
        <Image
          src="/shared/desktop/nvidia.svg"
          alt="tesla"
          width={139}
          height={26}
          className="brightness-0 invert"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-15 md:gap-8 lg:items-start">
        <div className="flex max-w-[457px] flex-col items-center justify-center gap-4 text-center md:gap-8 lg:max-w-[445px] lg:items-start lg:gap-6 lg:text-left">
          <h2 className="font-dm-serif-display text-[2rem] leading-9 font-normal tracking-[-0.25px] text-[#FBFCFE] md:text-5xl md:leading-14 md:tracking-[-0.37px]">
            Who we work with
          </h2>
          <p className="font-public-sans text-[0.9375rem] leading-7 tracking-normal text-[#FBFCFE]/70">
            Today, millions of people around the world have successfully connected their accounts to
            apps they love using our API. We provide developers with the tools they need to create
            easy and accessible experiences for their users.
          </p>
        </div>
        <Button
          type="button"
          variant={"ghost"}
          size={"lg"}
          asChild
          className="font-public-sans rounded-full border border-[#FBFCFE] text-[0.9375rem] leading-[auto] font-bold tracking-[-0.12px] text-[#FBFCFE] transition-colors duration-500 ease-in-out hover:bg-[#FBFCFE] hover:text-[#1B262F]"
        >
          <Link href="/">About Us</Link>
        </Button>
      </div>
    </Wrapper>
  );
};
export default WorkWith;

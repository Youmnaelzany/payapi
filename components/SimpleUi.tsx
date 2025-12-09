import Image from "next/image";
import Wrapper from "./Wrapper";

const SimpleUi = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Simple UI & UX"
      className="flex flex-col items-center justify-center py-20 md:py-25 lg:flex-row-reverse lg:justify-between"
    >
      <Image
        src="/home/desktop/illustration-simple-ui.svg"
        alt="Simple UI & UX"
        width={722}
        height={660}
        className="relative z-10 w-full max-w-[722px]"
      />
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
        <h2 className="font-dm-serif-display text-4xl leading-9 font-normal tracking-[-0.28px] text-[#36536B] md:text-5xl md:leading-14 md:tracking-[-0.37px]">
          Simple UI & UX
        </h2>
        <p className="font-public-sans text-[0.9375rem] leading-7 tracking-normal text-[#6C8294] md:max-w-[573px] lg:max-w-[445px]">
          Our pre-built form is easy to integrate in your app or website&apos;s checkout flow and
          designed to optimize conversion.
        </p>
      </div>
    </Wrapper>
  );
};
export default SimpleUi;

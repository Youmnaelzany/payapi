import Image from "next/image";
import Wrapper from "./Wrapper";

const EasyToImplement = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Easy To Implement"
      className="flex flex-col items-center justify-center lg:flex-row lg:justify-between"
    >
      <Image
        src="/home/desktop/illustration-easy-to-implement.svg"
        alt="Easy To Implement"
        width={605}
        height={444}
      />
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
        <h2 className="font-dm-serif-display text-4xl leading-9 font-normal tracking-[-0.28px] text-[#36536B] md:text-5xl md:leading-14 md:tracking-[-0.37px]">
          Easy to implement
        </h2>
        <p className="font-public-sans text-[0.9375rem] leading-7 font-normal tracking-normal text-[#6C8294] md:max-w-[573px] lg:max-w-[445px]">
          Our API comes with just a few lines of code. You&apos;ll be up and running in no time. We
          built our documentation page to integrate payments functionality with ease.
        </p>
      </div>
    </Wrapper>
  );
};
export default EasyToImplement;

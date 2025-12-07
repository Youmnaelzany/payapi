import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Wrapper from "./Wrapper";

const ReadyToStart = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-8 py-20 md:justify-between md:gap-10 md:py-25 lg:flex-row lg:py-24">
      <h2 className="font-dm-serif-display text-center text-[2rem] leading-9 font-normal tracking-[-0.25px] text-[#36536B] md:text-5xl md:leading-14 md:tracking-[-0.37px]">
        Ready to start?
      </h2>
      <div className="relative flex w-full flex-col items-center justify-center gap-4 md:max-w-[445px] md:flex-row md:gap-0">
        <div className="relative w-full">
          <Input
            placeholder="Enter email address"
            className="placeholder:font-public-sans font-public-sans h-[48px] w-full rounded-full bg-white pr-4 pl-6 text-[0.9375rem] leading-[auto] font-bold tracking-normal text-[#36536B] shadow-2xl placeholder:text-[0.9375rem] placeholder:leading-[auto] placeholder:font-bold placeholder:tracking-normal placeholder:text-[#36536B]/50 md:w-[445px]"
          />
        </div>
        <div className="md:absolute md:right-0">
          <Button
            variant={"primary"}
            size={"lg"}
            type="button"
            className="h-[48px] w-[327px] rounded-full px-8 shadow-2xl md:w-[173px]"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};
export default ReadyToStart;

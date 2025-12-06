import Image from "next/image";
import { APP_BENEFITS } from "@/lib/Concents";
import Wrapper from "./Wrapper";

const AppBenefits = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-12 pt-20 md:flex-row md:items-baseline md:justify-between md:gap-2.5 md:pt-25 lg:gap-7.5">
      {APP_BENEFITS.map((benefit) => (
        <div
          className="flex flex-col items-center justify-center gap-8"
          key={benefit.id}
        >
          <Image
            src={benefit.icon}
            alt={benefit.title}
            width={106}
            height={106}
          />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-public-sans text-lg leading-6.25 font-black tracking-[-0.14px] text-[#36536B]">
              {benefit.title}
            </h2>
            <p className="font-public-sans text-[0.9375rem] leading-6.25 font-normal tracking-[-0.12px] text-[#6C8294]">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default AppBenefits;

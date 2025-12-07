import Image from "next/image";
import AppBenefits from "@/components/AppBenefits";
import SimpleUi from "@/components/SimpleUi";

export default function Home() {
  return (
    <main className="relative">
      <SimpleUi />
      <div className="fixed top-1/2 -right-[140%] -z-10 h-[780px] w-[780px] -translate-y-1/2 md:-right-[60%] lg:-right-[30%]">
        <Image
          src="/shared/desktop/bg-pattern-circle.svg"
          alt="Pattern Circle"
          fill
          className="object-cover"
        />
      </div>

      <AppBenefits />
    </main>
  );
}

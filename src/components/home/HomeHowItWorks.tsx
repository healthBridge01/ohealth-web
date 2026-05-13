import Image from "next/image";
import { images } from "@/lib/images";

export function HomeHowItWorks() {
  return (
    <section className="overflow-hidden bg-[#f8fafc] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="mx-auto mt-3 max-w-2xl text-[28px] font-bold leading-tight tracking-tight text-gray-900 md:mt-4 md:text-[42px]">
            How OHealth works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] font-normal leading-relaxed text-gray-500 md:mt-6 md:text-[18px]">
            Create an account, connect with verified professionals, book
            consultations or lab tests, and manage your health data — all in one
            seamless experience.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative hidden w-full max-w-[1000px] md:block">
            <Image
              src={images.howItWorksDesktop}
              alt="Step-by-step: how OHealth works on desktop"
              width={1400}
              height={1000}
              priority
              sizes="(max-width: 768px) 0vw, 1200px"
              className="h-auto w-full"
            />
          </div>
          <div className="relative w-full max-w-[340px] md:hidden">
            <Image
              src={images.howItWorksMobile}
              alt="Step-by-step: how OHealth works on mobile"
              width={700}
              height={1200}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

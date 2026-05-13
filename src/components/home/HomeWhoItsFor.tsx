import Image from "next/image";
import { images } from "@/lib/images";

type Audience = {
  title: string;
  description: string;
  borderClass: string;
};

const audiences: Audience[] = [
  {
    title: "Patients",
    description:
      "Access trusted healthcare professionals, book consultations and tests online, and take control of your health records.",
    borderClass: "border-orange-600",
  },
  {
    title: "Healthcare professionals",
    description:
      "Reach more patients digitally, manage appointments efficiently, and deliver quality care with less administrative friction.",
    borderClass: "border-orange-300",
  },
  {
    title: "Hospitals, pharmacies & lab partners",
    description:
      "Expand your digital presence, receive bookings seamlessly, and connect with patients looking for reliable diagnostic services.",
    borderClass: "border-orange-200",
  },
];

export function HomeWhoItsFor() {
  return (
    <section className="bg-white px-6 py-16 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:gap-12">
        <div className="mt-4 w-full md:w-[55%]">
          <h2 className="text-[32px] font-bold leading-tight text-gray-900 md:text-[40px]">
            Who it&apos;s for
          </h2>
          <p className="mb-10 max-w-sm text-[15px] text-gray-700 md:text-[14px]">
            Built for everyone in the healthcare journey.
          </p>

          <div className="space-y-6">
            {audiences.map((item) => (
              <div
                key={item.title}
                className={`border-l-4 pl-3 transition-all duration-300 ${item.borderClass}`}
              >
                <h3 className="mb-1 text-[17px] font-bold text-gray-900 md:text-[19px]">
                  {item.title}
                </h3>
                <p className="max-w-md text-[14px] leading-relaxed text-gray-700 md:text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full justify-center md:w-[45%] md:justify-end">
          <div className="relative aspect-4/3.5 w-full max-w-[420px] md:aspect-square md:max-w-[520px]">
            <Image
              src={images.whoItsFor}
              alt="OHealth app preview on mobile devices"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

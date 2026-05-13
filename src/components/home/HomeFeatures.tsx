import Image from "next/image";
import { images } from "@/lib/images";

type Feature = {
  title: string;
  description: string;
  image: string;
  bgClass: string;
};

const features: Feature[] = [
  {
    title: "Online medical consultations",
    description:
      "Connect with verified doctors, therapists, and specialists for virtual consultations from anywhere.",
    image: images.feature1,
    bgClass: "bg-sky-50/40",
  },
  {
    title: "Hospital, pharmacy & lab partnerships",
    description:
      "Book diagnostic tests with registered hospitals, pharmacies and laboratories and receive results digitally.",
    image: images.feature2,
    bgClass: "bg-orange-50/40",
  },
  {
    title: "Guided health support",
    description:
      "Get clear guidance to help you navigate symptoms, appointments, and health information more easily.",
    image: images.feature3,
    bgClass: "bg-emerald-50/40",
  },
];

export function HomeFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <span className="text-[13px] font-bold text-brand-orange md:text-[15px]">
            What OHealth does
          </span>
          <h2 className="mt-3 px-2 text-[28px] font-bold leading-tight tracking-tight text-gray-900 md:mt-4 md:text-[40px] md:leading-tight">
            Everything you need to manage your health in one platform
          </h2>
          <p className="mx-auto mt-4 max-w-3xl px-4 text-[15px] font-normal leading-relaxed text-gray-700 md:mt-6 md:text-[17px]">
            OHealth brings healthcare services together so you can access care,
            diagnostics, and your health data without stress or unnecessary
            hospital visits.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-[#f3f4f6] p-6 shadow-sm transition-all hover:shadow-md md:rounded-4xl md:p-8"
            >
              <div className="mb-6 md:mb-8">
                <h3 className="text-[20px] font-bold leading-tight text-gray-900 md:text-[22px]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] font-normal leading-relaxed text-gray-500 md:mt-3 md:text-[15px]">
                  {feature.description}
                </p>
              </div>

              <div
                className={`relative mt-auto flex h-60 items-center justify-center overflow-hidden rounded-2xl border border-gray-50/50 md:h-80 ${feature.bgClass}`}
              >
                <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 md:p-0"
                    priority
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.35)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

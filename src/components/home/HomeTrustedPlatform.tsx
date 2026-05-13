import {
  CheckBadgeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';

type TrustPoint = {
  title: string;
  description: string;
  icon: 'badge' | 'lock' | 'shield' | 'user';
};

const trustPoints: TrustPoint[] = [
  {
    title: 'Verified healthcare professionals',
    description:
      'All doctors, therapists, and specialists are properly verified before joining the platform.',
    icon: 'badge',
  },
  {
    title: 'Secure & private data',
    description:
      'Your health information is protected with industry-standard security and privacy measures.',
    icon: 'lock',
  },
  {
    title: 'Privacy & compliance',
    description:
      'OHealth is built with patient confidentiality and regulatory compliance at its core.',
    icon: 'shield',
  },
  {
    title: 'Registered hospitals, pharmacies & laboratories',
    description: 'We work only with recognized and trusted healthcare institutions.',
    icon: 'user',
  },
];

const iconMap = {
  badge: CheckBadgeIcon,
  lock: LockClosedIcon,
  shield: ShieldCheckIcon,
  user: UserPlusIcon,
} as const;

export function HomeTrustedPlatform() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#101828] md:text-[38px]">
          A trusted healthcare platform you can rely on
        </h2>
        <p className="mx-auto mb-14 mt-4 max-w-2xl text-[15px] leading-relaxed text-[#667085] md:text-[16px]">
          Create an account, connect with verified professionals, book consultations or
          lab tests, and manage your health data — all in one seamless experience.
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {trustPoints.map(point => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.title}
                className="flex flex-col items-center rounded-3xl border border-[#f2f4f7] bg-white p-8 text-center shadow-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center">
                  <Icon className="h-9 w-9 text-brand-orange-deep" />
                </div>
                <h3 className="mb-3 text-[16px] font-bold text-[#0f1520] md:text-[18px]">
                  {point.title}
                </h3>
                <p className="max-w-md text-[14px] leading-relaxed text-[#667085] md:text-[15px]">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

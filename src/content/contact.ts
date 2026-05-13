export type SupportCard = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export const supportCards: SupportCard[] = [
  {
    title: "Customer support",
    description:
      "For general questions about your account, appointments, or using OHealth day to day.",
    href: "/contact",
    linkLabel: "Go to support center",
  },
  {
    title: "Sales inquiries",
    description:
      "For partnerships, enterprise rollout, and questions about plans for teams and organizations.",
    href: "/contact",
    linkLabel: "Talk to sales",
  },
  {
    title: "Technical support",
    description:
      "If something isn’t working as expected, our team can help troubleshoot the platform or app.",
    href: "/contact",
    linkLabel: "Get technical help",
  },
  {
    title: "General information",
    description:
      "Press, compliance, security reviews, or anything that doesn’t fit the categories above.",
    href: "/contact",
    linkLabel: "Contact us",
  },
];

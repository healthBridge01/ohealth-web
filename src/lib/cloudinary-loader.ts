type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function cloudinaryLoader({ src, width }: LoaderProps): string {
  if (src.startsWith('https://')) {
    return src;
  }

  const params = [
    'f_auto',
    'q_auto:best',
    'dpr_auto',
    'c_limit',
    `w_${width}`,
    'dpr_auto',
  ];

  return `https://res.cloudinary.com/doeoxmyna/image/upload/${params.join(',')}/${src}`;
}

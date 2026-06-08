import type { NextConfig } from 'next';

const shouldValidateEnv =
  process.env.NODE_ENV === 'production' &&
  (process.env.CI === 'true' || process.env.VERCEL === '1');

if (shouldValidateEnv) {
  const required = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL'] as const;

  for (const key of required) {
    if (!process.env[key]?.trim()) {
      throw new Error(
        `\n\nMissing required environment variable: ${key}\n` +
          `Add it to your production environment and rebuild.\n`,
      );
    }
  }
}

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/lib/cloudinary-loader.ts',
  },
};

export default nextConfig;

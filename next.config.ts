// next.config.ts

import type { NextConfig } from 'next';

// // ── Environment variable validation ──────────────────────────────────────────
// // Runs once at startup. If a required variable is missing, the server refuses
// // to start and prints exactly which variable is missing — no more silent fails.
// const REQUIRED_ENV_VARS = [
//   'RESEND_API_KEY',
//   'CONTACT_TO_EMAIL',
//   'CONTACT_FROM_EMAIL',
// ] as const;

// for (const key of REQUIRED_ENV_VARS) {
//   if (!process.env[key]?.trim()) {
//     throw new Error(
//       `\n\n❌ Missing required environment variable: ${key}\n` +
//         `   Add it to your .env.local file and restart the server.\n`,
//     );
//   }
// }
// // ─────────────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/lib/cloudinary-loader.ts',
  },
};

export default nextConfig;

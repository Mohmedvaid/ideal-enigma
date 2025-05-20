// config/env.ts
import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_FIREBASE_API_KEY: z.string(),
  EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string(),
  EXPO_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
  EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string(),
  EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  EXPO_PUBLIC_FIREBASE_APP_ID: z.string(),
});

export const env = envSchema.parse(process.env);

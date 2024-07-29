import { db } from "app/lib/db";
import { loginSchema } from "@/app/lib/zod";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { sendEmailVerification } from "app/lib/mail";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error("Missing Google client ID or secret in environment variables");
}

const providers = [
  GoogleProvider({
    clientId: googleClientId,
    clientSecret: googleClientSecret,
  }),
];

export default providers satisfies NextAuthOptions['providers'];
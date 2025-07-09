import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGRW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-200">
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-2xl font-bold">
                  <Image
                    src="/favicon.png"
                    alt="AGRW Logo"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <UserButton />
              </div>
            </SignedIn>
          </header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

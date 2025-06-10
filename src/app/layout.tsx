import { Toaster } from "@/components/ui/sonner";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ConvexClientProvider } from "./convex-client-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Smart Notes",
    default: "Smart Notes",
  },
  description:
    "A note-taking app with AI chatbot integration built with Convex and the Vercel AI SDK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.className} antialiased`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster position="top-right" />
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}

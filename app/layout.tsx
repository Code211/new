import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Code211",
  description:
    "Code211 is a 12-hour hackathon where students team up to build innovative projects, learn new skills, and compete for $10K+ in prizes. Free to attend, beginner-friendly.",
  authors: [{ name: "Code211 Team" }],
  keywords: [
    "hackathon",
    "coding",
    "programming",
    "students",
    "technology",
    "innovation",
    "competition",
  ],
  openGraph: {
    title: "Code211",
    description:
      "12 hours to create something amazing. Free to attend, beginner-friendly hackathon with $10K+ in prizes.",
    type: "website",
    siteName: "Code211",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code211",
    description:
      "24 hours to create something amazing. Free to attend, beginner-friendly hackathon with $10K+ in prizes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f7177",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

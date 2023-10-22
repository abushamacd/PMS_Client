import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Mind Expo",
  description: "Manage Your Project Efficent Way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}

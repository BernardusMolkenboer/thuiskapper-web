import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thuiskapper.app"),
  title: "Thuiskapper.app - Altijd een kapper bij jou thuis",
  description:
    "Vind direct een professionele kapper die naar je toe komt. Salon-kwaliteit in je eigen huiskamer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.thuiskapper.app",
    siteName: "Thuiskapper.app",
    title: "Thuiskapper.app - Altijd een kapper bij jou thuis",
    description:
      "Vind direct een professionele kapper die naar je toe komt. Salon-kwaliteit in je eigen huiskamer.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

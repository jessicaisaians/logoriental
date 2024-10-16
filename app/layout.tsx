import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import "./global.css";
const baseUrl = "https://logoriental.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Logoriental",
    template: "%s | Web, Branding & Graphic Design Agency",
  },
  icons: { icon: "/icon.png" },
  description: "Web, Branding & Graphic Design Agency",
  openGraph: {
    title: "Logoriental",
    description: "Web, Branding & Graphic Design Agency",
    url: baseUrl,
    siteName: "Logoriental",
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cx(
        "text-black h-screen max-h-screen flex flex-col items-center justify-center overflow-hidden dark:text-white bg-gradient-to-r from-zinc-900 to-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { iranSans } from "./components/assets/fonts";
import "./global.css";
import LenisSmoothScrollProvider from "./providers/LenisSmoothScrollProvider";
import ResizeObserverProvider from "./providers/ResizeObserverProvider";
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
  const font = {
    dir: "rtl",
    lang: "fa",
    className: iranSans.className,
  };
  return (
    <html
      {...font}
      className={cx(
        "text-black h-screen mx-auto max-w-[850px]  items-center justify-center dark:text-white bg-[--dark-2]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <ResizeObserverProvider>
        <body
          className={`${font.className} antialiased p-6 pb-[102px]  w-full max-w-full mx-auto flex flex-col items-center justify-center`}
        >
          <LenisSmoothScrollProvider>{children}</LenisSmoothScrollProvider>
        </body>
      </ResizeObserverProvider>
    </html>
  );
}

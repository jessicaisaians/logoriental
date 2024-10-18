import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { iranSans } from "./components/assets/fonts";
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import "./globals.css";
import PageWrapperAnimation from "./PageWrapperAnimation";
import LenisSmoothScrollProvider from "./providers/LenisSmoothScrollProvider";
import ResizeObserverProvider from "./providers/ResizeObserverProvider";
import SectionAnimationWrapper from "./SectionAnimationWrapper";
const baseUrl = "https://logoriental.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Logoriental",
    template: "%s | Web, Branding & Graphic Design Agency",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/icon-16.png", sizes: "16x16" },
      { rel: "icon", url: "/icon-32.png", sizes: "32x32" },
      { rel: "icon", url: "/icon-64.png", sizes: "64x64" },
    ],
    apple: "/apple-icon.png",
  },
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
      className="text-light-90 h-screen mx-auto max-w-4xl items-center justify-center bg-dark-2"
    >
      <ResizeObserverProvider>
        <body
          className={`${font.className} antialiased p-6 pb-24 w-full max-w-full mx-auto`}
        >
          <LenisSmoothScrollProvider>
            <PageWrapperAnimation>
              <SectionAnimationWrapper>
                <Header key="header" />
              </SectionAnimationWrapper>
              {children}
              <SectionAnimationWrapper>
                <Copyright key="copyright" />
              </SectionAnimationWrapper>
            </PageWrapperAnimation>
          </LenisSmoothScrollProvider>
        </body>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_MEASURMENT_ID} />
      </ResizeObserverProvider>
    </html>
  );
}

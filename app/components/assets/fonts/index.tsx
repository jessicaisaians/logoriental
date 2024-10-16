import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "./fontFiles/iransans/IRANSansX-Light.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fontFiles/iransans/IRANSansX-Regular.woff",
      style: "normal",
      weight: "500",
    },

    {
      path: "./fontFiles/iransans/IRANSansX-Medium.woff",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fontFiles/iransans/IRANSansX-Bold.woff",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--iranSans",
});

export { iranSans };

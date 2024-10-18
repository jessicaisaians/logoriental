declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      GOOGLE_ANALYTICS_MEASURMENT_ID: string;
    }
  }
}

export {}

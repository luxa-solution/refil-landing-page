import { GoogleAnalytics } from "@next/third-parties/google";

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export default function Providers() {
  return <>
    { gaId && <GoogleAnalytics gaId={gaId} /> }
  </>;
}
import type { AppProps } from "next/app";
import PageTemplate from "@/components/templates/PageTemplate";
import '../styles/globals.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTemplate>
      <Component {...pageProps} />
    </PageTemplate>
  );
}

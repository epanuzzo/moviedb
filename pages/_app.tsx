import type { AppProps } from "next/app";
import Header from "@/components/organisms/Header";
import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

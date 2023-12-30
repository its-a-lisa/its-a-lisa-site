import { DataProvider } from "@plasmicapp/react-web/lib/host";
import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);
  
  return (
    <PlasmicRootProvider
      Head={Head}
      globalVariants=
      {[{
        name: "Theme", 
        value: dark ? 'dark' : undefined
      }]}
    >
      <Component {...pageProps} />
      <DataProvider name="setDark" data={setDark}>
        ...
      </DataProvider>
    </PlasmicRootProvider>
  );
}

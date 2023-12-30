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
      globalVariants={[
        // Add the missing globalVariants property
        { name: "Theme", value: dark ? "dark" : undefined },
      ]}
    >
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

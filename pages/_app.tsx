import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

   // Toggle the theme mode
   const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
     
    <PlasmicRootProvider
      Head={Head}
      globalVariants={[
        // Set the "Theme" variant based on darkMode state
        { name: "Theme", value: darkMode ? "dark" : undefined },
      ]}
    >
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </PlasmicRootProvider>
  );
}

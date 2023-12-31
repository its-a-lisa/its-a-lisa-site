import { DataProvider } from "@plasmicapp/react-web/lib/host";
import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import ThemeContext from "@/components/plasmic/its_a_lisa_site/PlasmicGlobalVariant__Theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the theme mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DataProvider
      name="darkModeData"
      data={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <ThemeContext.Provider value={darkMode ? "dark" : undefined}>
        <PlasmicRootProvider Head={Head}>
          <Component {...pageProps}/>
        </PlasmicRootProvider>
      </ThemeContext.Provider>
    </DataProvider>
  );
}
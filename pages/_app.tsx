import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../context/AuthenticationContext";
import { PortalContextProvider } from "../context/PortalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <PortalContextProvider>
        <Component {...pageProps} />
      </PortalContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;

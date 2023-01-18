import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../context/auth.context";
import { PortalContextProvider } from "../context/portal.context";

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

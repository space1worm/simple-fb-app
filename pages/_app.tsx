import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AuthProvider } from "../context/auth.context";
import { PortalContextProvider } from "../context/portal.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PortalContextProvider>
        <Component {...pageProps} />
      </PortalContextProvider>
    </AuthProvider>
  );
}

export default MyApp;

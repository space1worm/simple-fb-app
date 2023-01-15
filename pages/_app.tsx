import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

import { AuthContextProvider } from '../context/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  </AuthContextProvider>
}

export default MyApp

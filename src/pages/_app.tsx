import '@/styles/globals.css'
import "@/styles/birds.css"
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider> <Component {...pageProps} />
  </ChakraProvider>
}

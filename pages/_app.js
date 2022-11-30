import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const weva = extendTheme ({
  colors: {
    brand: {
      100: "#F4D673",
      900: "#EEC11A"
    },
    wevaBasic: {
      100: "#ffff",
      200: "#efefef",
      900: "#0a1931"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={weva}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

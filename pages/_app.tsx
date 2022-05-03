import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { MainContainer } from "../styles/layout";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default MyApp;

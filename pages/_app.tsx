import * as React from "react";
import App from "next/app";
import { injectGlobal } from "emotion";
import Footer from "../components/Footer";

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", Helvetica, sans-serif;
    letter-spacing: normal;
    margin: 0;
    font-size: 16px;
    min-width: 320px;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #5f6c80;
    margin-right: 20px;
    font-size: 18px;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

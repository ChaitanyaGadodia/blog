import * as React from "react";
import App from "next/app";
import { Global, css } from "@emotion/core";
import { CacheProvider } from "@emotion/core";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

const globalStyles = (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
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
      }
    `}
  />
);

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

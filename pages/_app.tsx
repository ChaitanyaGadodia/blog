/// <reference types="@emotion/react/types/css-prop" />

import * as React from "react";
import App from "next/app";
import { css, Global } from "@emotion/react";
import Head from "next/head";

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
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {globalStyles}
        <Component {...pageProps} />
      </>
    );
  }
}

import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";
import { css } from "@emotion/core";

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Notes</title>
        </Head>
        <Header page="Notes" />
        <div css={pageWrap}>
          <div css={pageHeading}>Notes</div>
          <div
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            })}
          >
            Coming Soon &#128579;
          </div>
        </div>
      </>
    );
  }
}

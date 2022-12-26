import * as React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";
import { css } from "@emotion/react";

export default class Projects extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Projects</title>
        </Head>
        <Header page="Projects" />
        <div css={pageWrap}>
          <div css={pageHeading}>Projects</div>
          <div
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px"
            })}
          >
            Coming Soon &#128579;
          </div>
        </div>
      </>
    );
  }
}

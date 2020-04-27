import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";
import { css } from "emotion";

export default class Projects extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Projects</title>
        </Head>
        <Header page="Projects" />
        <div className={pageWrap}>
          <div className={pageHeading}>Projects</div>
          <div
            className={css({
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

import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import ResumeContent from "../components/Resume";
import Footer from "../components/Footer";
import { pageWrap, pageHeading } from "../styles/global";
import { css } from "@emotion/core";

export default class Resume extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Resume</title>
        </Head>
        <Header page="Resume" />
        <div css={pageWrap}>
          <div
            css={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            })}
          >
            <div css={pageHeading}>Resume</div>
            <a href="/resume/Chaitanya_Gadodia_Resume.pdf" download>
              Download PDF
            </a>
          </div>
          <ResumeContent />
        </div>
        <Footer />
      </>
    );
  }
}

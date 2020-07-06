import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import ResumeContent from "../components/Resume";
import Footer from "../components/Footer";
import { pageWrap, pageHeading } from "../styles/global";

export default class Resume extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Resume</title>
        </Head>
        <Header page="Resume" />
        <div css={pageWrap}>
          <div css={pageHeading}>Resume</div>
          <ResumeContent />
        </div>
        <Footer />
      </>
    );
  }
}

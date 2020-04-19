import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";

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
        </div>
      </>
    );
  }
}

import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Notes</title>
        </Head>
        <Header page="Notes" />
        <div className={pageWrap}>
          <div className={pageHeading}>Notes</div>
        </div>
      </>
    );
  }
}

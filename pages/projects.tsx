import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";

export default class Projects extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Projects</title>
        </Head>
        <Header page="Projects" />
      </>
    );
  }
}

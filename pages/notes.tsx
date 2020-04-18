import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";

export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Chaitanya Gadodia | Notes</title>
        </Head>
        <Header page="Notes" />
      </div>
    );
  }
}

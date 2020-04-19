import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia</title>
        </Head>
        <Header page="Home" />
        <div className={pageWrap}>
          <div className={pageHeading}>Chaitanya Gadodia</div>
          <div>
            I love to code and am extremely passionate about building high
            throughput, intelligent solutions to problems that can scale to
            millions of users. I code for a bootstrapped startup Anarock based
            out of Mumbai, India. I graduated with a B.E.(Hons.) in Electrical
            and Electronics from
            <a
              href="http://www.bits-pilani.ac.in/pilani/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Birla Institute of Technology and Science, Pilani, India.
            </a>
          </div>
        </div>
      </>
    );
  }
}

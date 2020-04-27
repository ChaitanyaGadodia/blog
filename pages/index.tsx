import * as React from "react";
import Head from "next/Head";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";
import { css } from "emotion";

const statement = css({
  margin: "0px 40px 15px 0px",
  textAlign: "justify",
});

const contentWrap = css({ display: "flex", alignItems: "center" });

const profileStyle = css({ borderRadius: "4px", width: "270px" });

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
          <div className={statement} style={{ margin: "10px 0px 40px" }}>
            engineer. hacker. optimist
          </div>
          <div className={contentWrap}>
            <div>
              <div className={statement}>
                I love to code and am extremely passionate about building high
                throughput, intelligent solutions to problems that can scale to
                millions of users using products which are{" "}
                <strong>data driven</strong> and have{" "}
                <strong>great design</strong>.
              </div>
              <div className={statement}>
                Currently, I code for a bootstrapped startup{" "}
                <a
                  href="https://tech.anarock.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Anarock
                </a>
                , based out of Mumbai, India.
              </div>
              <div className={statement}>
                Prior to which I graduated with a B.E.(Hons.) in Electrical and
                Electronics from{" "}
                <a
                  href="http://www.bits-pilani.ac.in/pilani/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Birla Institute of Technology and Science Pilani
                </a>{" "}
                in 2018, and had enriching internship experiences at{" "}
                <a
                  href="https://www.here.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Here
                </a>{" "}
                and{" "}
                <a
                  href="https://www.cdit.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  C-DIT
                </a>
                .
              </div>
              <div className={statement}>
                I idiolize Rahul Dravid and Steve Jobs for the intensity these
                guys had, and I intent to bring the same intensity to the table.
              </div>
            </div>
            <img src="/profile.jpg" className={profileStyle} />
          </div>
        </div>
      </>
    );
  }
}

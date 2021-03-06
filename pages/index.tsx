import * as React from "react";
import Head from "next/Head";
import { css } from "@emotion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageWrap, pageHeading } from "../styles/global";

// const breakpoints = [576, 768, 992, 1200]

const statement = css`
  margin: 0px 40px 15px 0px;
  text-align: justify;
  @media (max-width: 576px) {
    margin-right: 0px;
  }
`;

const contentWrap = css`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const textWrap = css({
  marginTop: "5px"
});

const profileStyle = css({
  borderRadius: "4px",
  minWidth: "270px" // Image shrinks in firefox: https://github.com/philipwalton/flexbugs/issues/138 -> watch this
});

const subHeading = css({
  margin: "10px 0px 40px"
});

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia</title>
        </Head>
        <Header page="Home" />
        <div css={pageWrap}>
          <div css={pageHeading}>Chaitanya Gadodia</div>
          <div css={[statement, subHeading]}>engineer. hacker. optimist</div>
          <div css={contentWrap}>
            <div css={textWrap}>
              <div css={statement}>
                I &#128150;to <strong>code</strong> and am extremely passionate
                about <strong>building</strong> high throughput, intelligent
                solutions to problems that can scale to millions of users using
                products that are <strong>data-driven</strong> and have a{" "}
                <strong>great design</strong>.
              </div>
              <div css={statement}>
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
              <div css={statement}>
                Prior to which I graduated with a B.E.(Hons.) in Electrical and
                Electronics from{" "}
                <a
                  href="http://www.bits-pilani.ac.in/pilani/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Birla Institute of Technology and Science Pilani
                </a>{" "}
                in 2018
                <span>
                  , and had enriching internship experiences at{" "}
                  <a
                    href="https://www.here.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Here Maps
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.cdit.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    C-DIT
                  </a>
                </span>
                .
              </div>
              <div css={statement}>
                I have always found idols in people like Rahul Dravid and Steve
                Jobs, who are known for the intensity these guys had, and I
                intend to bring the same intensity to the table.
              </div>
              <div css={statement}>
                I am always on the lookout for opportunities that will help me
                learn new things, so let&apos;s collaborate!
              </div>
            </div>
            <img
              alt="Profile Pic"
              src="/profile.jpg"
              css={profileStyle}
              width={270}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

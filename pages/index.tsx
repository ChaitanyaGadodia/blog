import * as React from "react";
import Head from "next/head";
import { css } from "@emotion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageWrap } from "../styles/global";

// const breakpoints = [576, 768, 992, 1200]

// const statement = css`
//   margin: 0px 40px 15px 0px;
//   text-align: justify;
//   @media (max-width: 576px) {
//     margin-right: 0px;
//   }
// `;

const contentWrap = css`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

// const textWrap = css({
//   marginTop: "5px"
// });

const profileStyle = css({
  borderRadius: "4px",
  minWidth: "270px" // Image shrinks in firefox: https://github.com/philipwalton/flexbugs/issues/138 -> watch this
});

// const subHeading = css({
//   margin: "10px 0px 40px"
// });

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia</title>
        </Head>
        <Header page="Home" />
        <div css={pageWrap}>
          <div css={contentWrap}>
            <div>
              <h1
                css={css`
                  font-size: 32px;
                  font-weight: 300;
                  line-height: 1.2;
                `}
              >
                Hi!👋 I&apos;m Chaitanya
              </h1>
              <p>
                I am a software developer living in Bangalore, India and work at
                ZebPay as Lead Software Developer.
              </p>
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

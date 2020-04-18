import * as React from "react";
import Head from "next/Head";
import { css } from "emotion";
import Header from "../components/Header";

const card = css`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  font-weight: 400;
  background-color: #fdfdfd;
  padding: 1rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 0.25rem;
`;

export default class Resume extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Chaitanya Gadodia | Resume</title>
        </Head>
        <Header page="Resume" />
        <div
          className={css`
            padding-top: 56px;
            color: #3c4858;
            background-color: #fdfdfd;
            margin-right: auto;
            margin-left: auto;
            max-width: 800px;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
          `}
        >
          <div className={card}>
            <div>General Information</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Education</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Work Experience</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Projects</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Skills</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Awards and Recognitions</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Hobbies</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
        </div>
      </>
    );
  }
}

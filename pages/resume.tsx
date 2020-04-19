import * as React from "react";
import Head from "next/Head";
import { css } from "emotion";
import Header from "../components/Header";
import { pageWrap, pageHeading } from "../styles/global";

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
        <div className={pageWrap}>
          <div className={pageHeading}>Resume</div>
          <div className={card}>
            <div>General Information</div>
            <div>Full Name Chaitanya Gadodia </div>
            <div>Contact chaitanya.gadodia01 [at] gmail [dot] com</div>
          </div>
          <div className={card}>
            <div>Education</div>
            <div>
              2014 - 2018 Birla Institute of Technology and Science, Pilani –
              Bachelor of Engg. (Hons.) in Electrical and Electronics
            </div>
          </div>
          <div className={card}>
            <div>Work Experience</div>
            <div>
              Data Science Intern, HERE Maps Jul 2017 - Dec 2017 • Developed a
              Machine Learning and Data Mining solution to Automate the manual
              process of Image Review for Map Creation and Places Teams. Scaled
              the solution using Pyspark and deployed it on a large graph
              dataset (Neo4j) and AWS. • Analyzed the Validation-Exception
              framework deltas to generate a summary of the response data .
            </div>
            <div>
              Summer Research Intern, Center for Development of Imaging
              Technology Jun 2016 - Jul 2016 • Worked with the Optical Image
              Processing and Security Products Team. • Designed and implemented
              a model for Vehicle Detection during night time from CCTV footage
              for Forensic Analysis, using various image processing techniques.
            </div>
          </div>
          <div className={card}>
            <div>Projects</div>
            <div>
              Image Classification Aug 2016 - Apr 2017 • Implemented a CNN
              classifier for CIFAR and MNIST image datasets using Tensorflow and
              Tensorboard as a project for machine learning course.
            </div>
            <div>
              ANC-Bill Predictor Aug 2016 - Apr 2017 • Implemented machine
              learning models for predicting the monthly All NIght Canteen Bill
              based on various parameters related to a student&apos;s lifestyle
              in BITS.
            </div>
          </div>
          <div className={card}>
            <div>Skills</div>
            <div>
              Courses: Object Oriented Programming, Operating Systems, Machine
              Learning, Pattern Recognition.
            </div>
            <div>Programming Languages : C, C++, Python, R, Javascript</div>
            <div>Tools : Amazon Web Services, Github, Jupyter, VSCode. </div>
          </div>
          <div className={card}>
            <div>Awards and Recognitions</div>
            <div>
              • Ranked 1st out of 11 teams in the AI based - virtual bot coding
              competition at the even plAI, APOGEE&apos;16. 2016
            </div>
            <div>
              • Awarded Gold medal at APOGEE&apos;15 for the project Temporal
              Clustering of Human Actions for Complex activity analysis. 2015
            </div>
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

import * as React from "react";
import Head from "next/Head";
import { css, cx } from "emotion";
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

const cardHeading = css({
  fontSize: "1.75rem",
  fontWeight: 300,
  marginBottom: "0.75rem",
});

const badge = css`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0.125rem;
  color: #ffffff;
  width: 110px;
  background-color: #cc0000;
  font-weight: 700;
  text-transform: uppercase;
  vertical-align: middle;
`;

const headStyle = css({
  fontSize: 16,
  fontWeight: 500,
});

const contentStyle = css({
  fontWeight: 200,
});

const labelStyle = css({
  textAlign: "end",
});

const nameText = css({
  paddingLeft: "20px",
});

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
            <div className={cardHeading}>General Information</div>
            <table>
              <tbody>
                <tr>
                  <td className={cx(headStyle, labelStyle)}>Name</td>
                  <td className={cx(contentStyle, nameText)}>
                    Chaitanya Gadodia
                  </td>
                </tr>
                <tr>
                  <td className={cx(headStyle, labelStyle)}>Contact</td>
                  <td className={cx(contentStyle, nameText)}>
                    chaitanya [dot] gadodia01 [at] gmail [dot] com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={card}>
            <div className={cardHeading}>Education</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={badge}>2014 - 2018</div>
                  </td>
                  <td className={cx(headStyle, nameText)}>
                    Birla Institute of Technology and Science, Pilani – Bachelor
                    of Engg. (Hons.) in Electrical and Electronics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={card}>
            <div className={cardHeading}>Experience</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={badge}>Jun 2018-curr.</div>
                  </td>
                  <td>
                    <div className={headStyle}>Software Engineer, Anarock</div>
                    <ul className={contentStyle}>
                      <li>
                        Building the next gen high throughput and intelligent
                        Saas products for real estate.
                      </li>
                      <li>
                        Tech: Javascript, Typescript, Reactjs, Next.js, Svelte
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={badge}>Jul-Dec 2017</div>
                  </td>
                  <td>
                    <div className={headStyle}>
                      Data Science Intern, HERE Maps
                    </div>
                    <ul className={contentStyle}>
                      <li>
                        Developed a Machine Learning and Data Mining solution to
                        Automate the manual process of Image Review for Map
                        Creation and Places Teams. Scaled the solution using
                        Pyspark and deployed it on a large graph dataset (Neo4j)
                        and AWS.
                      </li>
                      <li>
                        Analyzed the Validation-Exception framework deltas to
                        generate a summary of the response data .
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={badge}>Summer 2016</div>
                  </td>
                  <td>
                    <div className={headStyle}>
                      Summer Research Intern, Center for Development of Imaging
                      Technology
                    </div>
                    <ul className={contentStyle}>
                      <li>
                        Worked with the Optical Image Processing and Security
                        Products Team.
                      </li>
                      <li>
                        Designed and implemented a model for Vehicle Detection
                        during night time from CCTV footage for Forensic
                        Analysis, using various image processing techniques.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={card}>
            <div className={cardHeading}>Projects</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={badge}>Sep 2017</div>
                  </td>
                  <td>
                    <div className={headStyle}>Image Classification</div>
                    <ul className={contentStyle}>
                      <li>
                        Implemented a CNN classifier for CIFAR and MNIST image
                        datasets using Tensorflow and Tensorboard as a project
                        for machine learning course.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={badge}>Nov 2017</div>
                  </td>
                  <td>
                    <div className={headStyle}>ANC-Bill Predictor</div>
                    <ul className={contentStyle}>
                      <li>
                        Implemented machine learning models for predicting the
                        monthly All NIght Canteen Bill based on various
                        parameters related to a student&apos;s lifestyle in
                        BITS.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={card}>
            <div className={cardHeading}>Skills</div>
            <ul className={contentStyle}>
              <li>
                Courses: Object Oriented Programming, Operating Systems, Machine
                Learning, Pattern Recognition
              </li>
              <li>
                Programming Languages: C, C++, Python, R, Javascript, Ruby
              </li>
              <li>Tools: Amazon Web Services, Github, Jupyter, VSCode</li>
            </ul>
          </div>
          <div className={card}>
            <div className={cardHeading}>Awards and Recognitions</div>
            <ul className={contentStyle}>
              <li>
                Ranked 1st out of 11 teams in the AI based - virtual bot coding
                competition at the even plAI, APOGEE&apos;16. 2016
              </li>
              <li>
                Awarded Gold medal at APOGEE&apos;15 for the project Temporal
                Clustering of Human Actions for Complex activity analysis. 2015
              </li>
            </ul>
          </div>
          <div className={card}>
            <div className={cardHeading}>Other Interests</div>
            <ul className={contentStyle}>
              <li>reading, music</li>
              <li>meditation, yoga, cycling</li>
              <li>fundamental & technical stocks analysis</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

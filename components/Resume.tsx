import * as React from "react";
import { css } from "@emotion/react";

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
  marginBottom: "0.75rem"
});

const cardHeadingBottom = css({
  marginBottom: "0px"
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
  fontWeight: 500
});

const contentStyle = css({
  fontWeight: 200,
  textAlign: "justify"
});

const labelStyle = css({
  textAlign: "end"
});

const nameText = css({
  paddingLeft: "20px"
});

export default class Resume extends React.PureComponent {
  render() {
    return (
      <>
        <div css={card}>
          <div css={cardHeading}>General Information</div>
          <table>
            <tbody>
              <tr>
                <td css={[headStyle, labelStyle]}>Name</td>
                <td css={[contentStyle, nameText]}>Chaitanya Gadodia</td>
              </tr>
              <tr>
                <td css={[headStyle, labelStyle]}>Contact</td>
                <td css={[contentStyle, nameText]}>
                  chaitanya [dot] gadodia01 [at] gmail [dot] com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div css={card}>
          <div css={cardHeading}>Education</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div css={badge}>2014 - 2018</div>
                </td>
                <td css={[headStyle, nameText]}>
                  Birla Institute of Technology and Science, Pilani – B.E.
                  (Hons.) in Electrical and Electronics
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div css={card}>
          <div css={cardHeading}>Experience</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div css={badge}>Apr 20-cur.</div>
                </td>
                <td>
                  <div css={headStyle}>
                    Senior Software Engineer,{" "}
                    <a
                      href="http://tech.anarock.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Anarock
                    </a>
                  </div>

                  <ul css={contentStyle}>
                    <li>In addition to my roles as software developer</li>
                    <li>
                      Own the build & deployment Pipeline for the Web Apps along
                      with tracking speed & monitoring errors.
                    </li>
                    <li>
                      Focus on ensuring code reliability, setting quality
                      standards and improving team productivity by reducing fear
                      through processes & tests.
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <div css={badge}>Jun 18-Mar 20</div>
                </td>
                <td>
                  <div css={headStyle}>
                    Software Engineer,{" "}
                    <a
                      href="http://tech.anarock.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Anarock
                    </a>
                  </div>

                  <ul css={contentStyle}>
                    <li>
                      Building the next-gen high throughput and intelligent Saas
                      products for real estate.
                    </li>
                    <li>
                      Have built multiple Web apps, Static websites and
                      Responsive PWAs.
                    </li>
                    <li>
                      Contributed to our Open Source UI Component Library:{" "}
                      <a
                        href="https://pebble-web.netlify.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Pebble
                      </a>
                      .
                    </li>
                    <li>
                      Tech: Javascript, Typescript, Reactjs, Redux, Next.js,
                      GraphQL, Svelte
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div css={badge}>Jul-Dec 17</div>
                </td>
                <td>
                  <div css={headStyle}>
                    Data Science Intern,{" "}
                    <a
                      href="https://here.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      HERE Maps
                    </a>
                  </div>

                  <ul css={contentStyle}>
                    <li>
                      Developed a Machine Learning and Data Mining solution to
                      Automate the manual process of Image Review for Map
                      Creation and Places Teams. Scaled the solution using
                      Pyspark and deployed it on a large graph dataset (Neo4j)
                      and AWS.
                    </li>
                    <li>
                      Analyzed the Validation-Exception framework deltas to
                      generate a summary of the response data.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div css={badge}>Summer 2016</div>
                </td>
                <td>
                  <div css={headStyle}>
                    Summer Research Intern,{" "}
                    <a
                      href="https://www.cdit.org/home-1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Center for Development of Imaging Technology
                    </a>
                  </div>
                  <ul css={contentStyle}>
                    <li>
                      Worked with the Optical Image Processing and Security
                      Products Team.
                    </li>
                    <li>
                      Designed and implemented a model for Vehicle Detection
                      during night time from CCTV footage for Forensic Analysis,
                      using various image processing techniques.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div css={card}>
          <div css={cardHeading}>Projects</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div css={badge}>Sep 2017</div>
                </td>
                <td>
                  <div css={headStyle}>Image Classification</div>
                  <ul css={contentStyle}>
                    <li>
                      Implemented a CNN classifier for CIFAR and MNIST image
                      datasets using Tensorflow and Tensorboard as a project for
                      machine learning course.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div css={badge}>Nov 2017</div>
                </td>
                <td>
                  <div css={headStyle}>ANC-Bill Predictor</div>
                  <ul css={contentStyle}>
                    <li>
                      Implemented machine learning models for predicting the
                      monthly All Night Canteen Bill based on various parameters
                      related to a student&apos;s lifestyle in BITS.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div css={card}>
          <div css={[cardHeading, cardHeadingBottom]}>Skills</div>
          <ul css={contentStyle}>
            <li>
              Courses: OOP, Operating Systems, Machine Learning, Pattern
              Recognition
            </li>
            <li>Programming Languages: C / C++, Javascript, Python, R, Ruby</li>
            <li>Tools: Git, VSCode, Amazon Web Services, Jupyter</li>
          </ul>
        </div>
        <div css={card}>
          <div css={[cardHeading, cardHeadingBottom]}>
            Awards and Recognitions
          </div>
          <ul css={contentStyle}>
            <li>
              Ranked <strong>1st out of 11</strong> teams in the AI-based -
              virtual bot coding competition at the even plAI,{" "}
              <strong>APOGEE&apos;16</strong>.
            </li>
            <li>
              Awarded <strong>Gold medal</strong> at{" "}
              <strong>APOGEE&apos;15</strong> for the project Temporal
              Clustering of Human Actions for Complex activity analysis.
            </li>
          </ul>
        </div>
        <div css={card}>
          {" "}
          <div css={[cardHeading, cardHeadingBottom]}>Other Interests</div>
          <ul css={contentStyle}>
            <li>reading, music</li>
            <li>meditation, yoga, swimming, cycling</li>
            <li>fundamental & technical stocks analysis</li>
          </ul>
        </div>
      </>
    );
  }
}

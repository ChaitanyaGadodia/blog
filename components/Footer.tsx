import * as React from "react";
import { css } from "@emotion/react";

const footerWrap = css`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 50px 4rem 0px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const tabStyle = css({
  textDecoration: "none",
  color: "#5f6c80",
  marginLeft: "20px",
  fontSize: "18px",
  cursor: "pointer"
});

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer css={footerWrap}>
        <p>Copyright &#169; {new Date().getFullYear()} Chaitanya Gadodia.</p>
        <div>
          <a
            css={tabStyle}
            title="Github"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ChaitanyaGadodia"
          >
            Github
          </a>
          <a
            css={tabStyle}
            title="LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/chaitanya-gadodia/"
          >
            LinkedIn
          </a>
          <a
            css={tabStyle}
            title="Twitter"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/chaitanya_73"
          >
            Twitter
          </a>
          <a
            css={tabStyle}
            title="Email"
            href="mailto:f2014177p@alumni.bits-pilani.ac.in"
          >
            Email
          </a>
        </div>
      </footer>
    );
  }
}

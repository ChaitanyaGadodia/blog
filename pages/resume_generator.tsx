import * as React from "react";
import { css } from "@emotion/react";
import ResumeContent from "../components/Resume";
import { pageWrap } from "../styles/global";

export default class ResumeGen extends React.PureComponent {
  render() {
    return (
      <div css={[pageWrap, css({ paddingTop: 10 })]}>
        <ResumeContent />
      </div>
    );
  }
}

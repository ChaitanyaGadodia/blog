import * as React from "react";
import { css } from "@emotion/core";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div
        css={css`
          color: #343a40;
          background-color: #fdfdfd;
          margin-right: auto;
          margin-left: auto;
          width: 100%;
          font-size: 72%;
          padding: 2px;
          position: fixed;
          left: 0px;
          bottom: 0px;
          width: 100%;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
        `}
      >
        &#169; Copyright {new Date().getFullYear()} Chaitanya Gadodia.
      </div>
    );
  }
}

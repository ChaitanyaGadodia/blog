import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const headerWrap = css({
  width: "100%",
  maxWidth: "1240px",
  margin: "0px auto",
  padding: "50px 4rem 0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

interface Props {
  page: string;
}

export default class Header extends React.PureComponent<Props> {
  state = {
    theme: "white"
  };

  render() {
    return (
      <header css={headerWrap}>
        <Link href="/">
          <a>
            <Image src="/code.png" width="30" height="30" />
          </a>
        </Link>
        {/* <div>
          <input type="checkbox" id="checkbox" />
        </div> */}
      </header>
    );
  }
}

import * as React from "react";
import { css } from "emotion";
import Link from "next/link";

interface Props {
  page: string;
}

const selectedPage = css({});

const Tab = (props: { href: string; title: string; page: string }) => {
  const { href, page, title } = props;
  return (
    <Link href={href}>
      <a title={title} className={page === title ? selectedPage : undefined}>
        {title}
      </a>
    </Link>
  );
};

export default class Header extends React.PureComponent<Props> {
  render() {
    const { page } = this.props;
    return (
      <div
        className={css`
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          font-weight: 300;
          background-color: #fafafa;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          position: fixed;
          padding: 0.5rem 1rem;
          color: #5f6c80;
          text-decoration: none;
        `}
      >
        <div
          className={css`
            margin-right: auto;
            margin-left: auto;
            max-width: 800px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <div>
            <Tab href="/" title="Home" page={page} />
            <Tab href="/resume" title="Resume" page={page} />
            <Tab href="/projects" title="Projects" page={page} />
            <Tab href="/notes" title="Notes" page={page} />
          </div>
          <div>
            <a
              title="Github"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ChaitanyaGadodia"
            >
              Github
            </a>
            <a
              title="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/chaitanya-gadodia/"
            >
              LinkedIn
            </a>
            <a title="Email" href="mailto:f2014177p@alumni.bits-pilani.ac.in">
              Email
            </a>
          </div>
        </div>
      </div>
    );
  }
}
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'

const Footer = () => {
  return (
    <footer css={footer}>
      <div className="container">
        <p className="text">Build with React, GitHub API and more.</p>
        <ul className="links">
          <li className="link_item">
            <a
              href="https://github.com/chocolat5/react-github-profile-viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title="Open the GitHub Repo"
            >
              <ImLinkedin2 className="icon" />
            </a>
          </li>
          <li className="link_item">
            <a
              href="https://github.com/chocolat5/react-github-profile-viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title="Open the GitHub Repo"
            >
              <ImGithub className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

const footer = css`
  margin-top: auto;
  padding: 32px 0;
  background-color: #fff;
  text-align: center;

  .container {
    @media screen and (min-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .text {
    font-size: 1.3rem;
    font-weight: 300;
  }

  .links {
    display: inline-flex;
    align-items: center;
    margin-top: 12px;

    @media screen and (min-width: 900px) {
      margin: 0;
    }
  }

  .link_item {
    & + .link_item {
      margin-left: 8px;
    }

    a {
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .icon {
    margin-right: 4px;
    color: #1e98c9;
    font-size: 1.6rem;
  }
`

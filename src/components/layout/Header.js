import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ImGithub } from 'react-icons/im'

const Header = () => {
  return (
    <header css={header}>
      <div className="container">
        <h1 className="title">GitHub Profile Viewer</h1>
        <a
          href="https://github.com/chocolat5/react-github-profile-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          title="Open the GitHub Repo"
        >
          <ImGithub className="icon" />
          View on GitHub
        </a>
      </div>
    </header>
  )
}

export default Header

const header = css`
  padding: 32px 0;
  text-align: center;

  .container {
    @media screen and (min-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .title {
    color: #fff;
    font-size: 1.8rem;
    letter-spacing: 0.08em;
  }

  .link {
    display: inline-flex;
    align-items: center;
    margin: 12px auto 0;
    padding: 4px 8px;
    color: #13a68a;
    background-color: #fff;
    border-radius: 4px;
    font-size: 1.2rem;
    text-decoration: none;

    @media screen and (min-width: 900px) {
      margin: 0;
    }
  }

  .icon {
    margin-right: 4px;
    color: #13a68a;
    font-size: 1.6rem;
  }
`

import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ImLocation, ImBriefcase } from 'react-icons/im'

const UserDetail = ({ data }) => {
  return (
    <div css={user}>
      <div className="container">
        <figure className="user_img">
          <img src={data.avatar_url} alt={data.login} />
        </figure>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="user_name"
        >
          @{data.login}
        </a>
        <div className="user_meta">
          {data.location && (
            <p>
              <ImLocation className="icon" />
              {data.location}
            </p>
          )}
          {data.company && (
            <p>
              <ImBriefcase className="icon" />
              {data.company}
            </p>
          )}
        </div>
        <div className="frame">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="user_btn"
          >
            View on GitHub
          </a>
          <div className="user_info">
            <p className="user_infoText">
              <span>{data.public_repos}</span>Repos
            </p>
            <p className="user_infoText">
              <span>{data.following}</span>following
            </p>
            <p className="user_infoText">
              <span>{data.followers}</span>followers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail

const user = css`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;

  .user_img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.14);
    overflow: hidden;

    img {
      object-fix: cover;
      object-position: 50% 50%;
    }
  }

  .user_name {
    display: inline-block;
    margin: 24px auto 0;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .user_meta {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);

    p + p {
      margin-left: 12px;
    }

    svg {
      vertical-align: middle;
      margin-right: 4px;
    }
  }

  .frame {
    position: relative;
    margin: 48px auto 56px;
    background-color: #fff;
    border-radius: 24px;
  }

  .user_btn {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-flex;
    align-items: center;
    margin: 12px auto 0;
    padding: 12px 32px;
    color: #1f98c3;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.14);
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    text-decoration: none;
  }

  .user_info {
    display: flex;
    padding: 40px 24px 32px;
  }

  .user_infoText {
    width: 33.333%;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    text-align: center;

    span {
      display: block;
      color: #2197c7;
      font-size: 3.6rem;
      font-family: 'Saira' sans-serif;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 0.1em;
    }
  }
`

import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { ImLocation, ImBriefcase } from 'react-icons/im'

const UserDetail = ({ data }) => {
  return (
    <div css={user}>
      <figure className="user_img">
        <img src={data.avatar_url} alt={data.login} />
      </figure>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <p>@{data.login}</p>
      {data.name && <p>{data.name}</p>}
      <div className="">
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
      <div>
        <p>Repos: {data.public_repos}</p>
        <p>following: {data.following}</p>
        <p>followers: {data.followers}</p>
      </div>
    </div>
  )
}

export default UserDetail

const user = css`
  position: relative;
  max-width: 560px;
  margin: 100px auto 0;
  padding-top: 100px;
  background-color: #fff;
  border-radius: 24px 24px 0 0;

  .user_img {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
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
`

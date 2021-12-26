import React, { useState, useMemo } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import Pagination from './Pagination'

const Repositories = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 6

  const currentRepoData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage
    const lastPageIndex = firstPageIndex + perPage
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  const repos = currentRepoData.map((item, index) => {
    return (
      <div key={item.id} css={repo}>
        <a href={item.html_url} target="_blank" rel="noopener noreferrer">
          <p className="repo_name">{item.name}</p>
          <p className="repo_desc">{item.description}</p>
          {item.language && <p className="repo_tag">{item.language}</p>}
        </a>
      </div>
    )
  })

  return (
    <div css={repoWrap}>
      <div className="container">
        <h2 className="repo_title">Repositories</h2>
        <div css={repoInner}>{repos}</div>
        <Pagination
          totalCount={data.length}
          pageSize={perPage}
          currentPage={currentPage}
          onChangePage={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

export default Repositories

const repoWrap = css`
  background-color: #ebf7f5;
  padding: 60px 0;

  .repo_title {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.05em;
  }
`

const repoInner = css`
  display: flex;
  flex-wrap: wrap;
  margin: 24px -16px -16px;
`

const repo = css`
  width: 100%;
  padding: 16px;

  @media screen and (min-width: 900px) {
    width: 33.333%;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 24px;
    color: #444;
    background-color: #fff;
    border-radius: 16px;
    text-decoration: none;
  }

  .repo_name {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  .repo_desc {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.6;
  }

  .repo_tag {
    display: inline-block;
    margin-top: 12px;
    padding: 2px 8px;
    backgorund-color: #e5f5f4;
    border-radius: 4px;
    font-size: 1.3rem;
    letter-spacing: 0.02em;
    line-height: 1.4;
    transition: 0.3s ease;

    &:hover {
      box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.14);
    }
  }
`

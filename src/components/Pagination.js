import React, { useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { usePagenation } from '../hooks/usePagenation'

const Pagination = ({
  onChangePage,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const pagenationRange = usePagenation({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  return (
    <div css={pagenation}>
      {pagenationRange.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => onChangePage(item)}
            className={item === currentPage ? 'current' : ''}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination

const pagenation = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 32px auto 0;

  button {
    background-color: transparent;
    outline: none;
    appearance: none;
    margin: 0 4px;
    color: #1f97cc;
    border-bottom: 2px solid #ebf7f5;
    font-size: 1.6rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    cursor: pointer;

    &.current {
      padding-bottom: 2px;
      border-bottom-color: #1f97cc;
      cursor: default;
    }
  }
`

import React, { useState } from 'react'

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
    <div className="">
      <button>Previous</button>
      {pagenationRange.map((item, index) => {
        return (
          <button key={index} onClick={() => onChangePage(item)}>
            {item}
          </button>
        )
      })}
      <button>Next</button>
    </div>
  )
}

export default Pagination

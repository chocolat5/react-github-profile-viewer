import React, { useMemo } from 'react'

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}

export const usePagenation = ({
  totalCount,
  pageSize,
  sibilingCount = 1,
  currentPage,
}) => {
  const pagenationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const totalPageNumbers = sibilingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }
  }, [totalCount, pageSize, sibilingCount, currentPage])

  return pagenationRange
}

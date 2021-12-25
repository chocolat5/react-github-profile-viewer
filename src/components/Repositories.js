import React, { useState, useMemo } from 'react'

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
      <div key={item.id}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.language}</p>
        </a>
      </div>
    )
  })

  return (
    <>
      {repos}
      <Pagination
        totalCount={data.length}
        pageSize={perPage}
        currentPage={currentPage}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </>
  )
}

export default Repositories

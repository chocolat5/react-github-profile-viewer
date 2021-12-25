import React, { useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const SearchForm = ({ value, onSearch }) => {
  const [username, setUserName] = useState()

  const handleChange = (e) => {
    const { value } = e.target
    setUserName(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSearch(username)
  }

  return (
    <form css={form} onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Type GitHub username"
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchForm

const form = css`
  padding: 32px 0;

  [type='text'] {
    display: block;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 18px 12px;
    border-radius: 8px;
    font-size: 1.5rem;
  }
`

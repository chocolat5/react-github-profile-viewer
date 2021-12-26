import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { useFetch } from '../hooks/useFetch'

export function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p css={loading}>Loading ...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri)

  if (error) {
    return renderError(error)
  }

  if (loading) {
    return loadingFallback
  }

  if (data) {
    return renderSuccess({ data })
  }
}

const loading = css`
  margin: 32px 0;
  color: #fff;
  text-align: center;
`

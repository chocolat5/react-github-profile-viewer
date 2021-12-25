import React from 'react'
import { useFetch } from '../hooks/useFetch'

export function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>Loading ...</p>,
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

import React, { useState, useEffect } from 'react'

export function useFetch(uri) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!uri) return
    fetch(uri, {
      headers: {
        'User-Agent': 'request',
      },
    })
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch((error) => {
        setError('Sorry, user not found!')
      })
  }, [uri])

  return {
    loading,
    data,
    error,
  }
}

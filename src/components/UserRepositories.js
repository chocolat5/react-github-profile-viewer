import React from 'react'

import { Fetch } from './Fetch'
import Repositories from './Repositories'

const UserRepositories = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => <Repositories data={data} />}
    />
  )
}

export default UserRepositories

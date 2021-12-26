import React, { useState, useEffect } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import UserDetail from './components/UserDetail'
import UserRepositories from './components/UserRepositories'
import SearchForm from './components/SearchForm'
import { Fetch } from './components/Fetch'

const App = () => {
  const [login, setLogin] = useState('')

  const handleSubmit = (e) => {
    setLogin(e.target.value)
  }

  return (
    <div css={app}>
      <Header />
      <main className="main">
        <div className="container">
          <SearchForm value={login} onSearch={setLogin} />
        </div>
        {login && (
          <>
            <Fetch
              uri={`https://api.github.com/users/${login}`}
              renderSuccess={UserDetail}
            />
            <UserRepositories login={login} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

const app = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(19, 166, 138);
  background: linear-gradient(
    223deg,
    rgba(19, 166, 138, 1) 14%,
    rgba(30, 152, 201, 1) 100%
  );
`

import React from 'react'

import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('App', () => {
  test('render Header component', () => {
    render(<Header />)

    screen.getByText('React Boilerplate')
  })
})

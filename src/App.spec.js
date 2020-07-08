import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'

describe('App', () => {
  it('Renders success', () => {
    const store = configureStore()
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})

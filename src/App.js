import React from 'react'
import { connect } from 'react-redux'
import get from './api'
import PropTypes from 'prop-types'

const FETCH_ITEMS = 'FETCH_ITEMS'
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

const fetchItems = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEMS })
  try {
    const result = await get('/items')
    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: result })
  } catch (e) {
    dispatch({ type: FETCH_ITEMS_FAILURE, payload: e })
  }
}

const fetchItemsEnhancement = () => ({
  type: FETCH_ITEMS,
  promise: get('/items'),
})

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Enhanced redux-thunk middleware</h1>
        <ul>
          <li>
            <button onClick={this.props.fetchItems} type="button">
              Fetch items using redux-thunk
            </button>
          </li>
          <li>
            <button onClick={this.props.fetchItemsEnhancement} type="button">
              Fetch items using enhanced redux-thunk middleware
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  fetchItemsEnhancement: PropTypes.func.isRequired,
}

export default connect(null, { fetchItems, fetchItemsEnhancement })(App)

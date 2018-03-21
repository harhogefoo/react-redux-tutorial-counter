import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

function mapStateToProps(state) {
  return state
}

// clickでactionを飛ばす
function mapDispatchToProps(dispatch) {
  return {
    Increment_Click: () => { dispatch(AppActions.increment()) },
    Decrement_Click: () => { dispatch(AppActions.decrement()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

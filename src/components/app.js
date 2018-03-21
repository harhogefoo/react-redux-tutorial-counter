import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.count}</span><br/>
        <button onClick={ () => this.props.Increment_Click() }>増加</button>
        <button onClick={ () => this.props.Decrement_Click() }>減少</button>
      </div>
    )
  }
}

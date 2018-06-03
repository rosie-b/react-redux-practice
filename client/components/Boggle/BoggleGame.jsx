import React from 'react'
import {connect} from 'react-redux'
import Words from './Words'
import AddWord from './AddWord'

class BoggleGame extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>BOGGLE</h1>
          <Words />
          <AddWord />
        </div>
      </div>
    )
  }
}

export default connect()(BoggleGame)

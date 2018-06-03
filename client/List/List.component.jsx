import React from 'react'
import {connect} from 'react-redux'
import Items from './Items.component'
import AddItem from './AddItem.component'

class List extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>Would you like to make a list?</h1>
          <Items />
          <br/>
          <AddItem />
        </div>
      </div>
    )
  }
}

export default connect()(List)

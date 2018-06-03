import React from 'react'
import {connect} from 'react-redux'

import TVsvg from './TVsvg.component'
import Eevee from './Eevee.component'

class Images extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>Images</h1>
          <TVsvg />
          <Eevee />
        </div>
      </div>
    )
  }
}

export default connect()(Images)
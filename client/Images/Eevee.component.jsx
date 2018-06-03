import React from 'react'
import {connect} from 'react-redux'

class Eevee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animated: false
    }
    this.toggleImage = this.toggleImage.bind(this)
  }

  toggleImage() {
    this.setState({animated: !this.state.animated})
  }


  render() {
    const {animated} = this.state
    return (
      <div className="game">
        <div className="game-board">
          {animated 
          ? <img src="https://orig00.deviantart.net/24da/f/2016/212/0/8/dancing_eevee_by_real_angelthegamer-dac5eew.gif" alt="Dancing Eevee" />
          : <img src="./images/Eevee.png" alt="Eevee outline" />
          }
          <a className="button" onClick={e => this.toggleImage()} type="submit">Switch Eevee State</a>
        </div>
      </div>
    )
  }
}

export default connect()(Eevee)


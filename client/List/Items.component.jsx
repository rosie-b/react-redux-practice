import React from 'react'
import {connect} from 'react-redux'

import Item from './Item.component'

const Items = ({items}) => (
  <div>
    {items.map(item =>
      <Item key={item.id}
        {...item}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Items)

import React from 'react'
import {connect} from 'react-redux'
import {addItem} from './list.actions'

function submitItem (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addItem(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddItem = (props) => (
  <div>
      <input
        placeholder='Enter item'
        onKeyUp={e => {submitItem(e, props.dispatch)}}/>
  </div>
)

export default connect()(AddItem)

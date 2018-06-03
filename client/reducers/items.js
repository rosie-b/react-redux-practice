const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state,
        {
          id: action.id,
          item: action.item
        }
      ]
    default:
      return state
  }
}

export default items

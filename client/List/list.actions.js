let nextItemId = 0

// add new item to redux state
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    item
  }
}

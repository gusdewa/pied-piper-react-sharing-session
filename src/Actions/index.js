export function populateItems(items) {
  return {
    type: 'POPULATE_ITEMS',
    items,
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  }
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    id,
  }
}

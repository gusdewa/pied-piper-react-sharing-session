import { combineReducers } from 'redux';

function items (items = [], action) {
  switch (action.type) {
    case 'POPULATE_ITEMS': {
      return action.items ;
    }
    case 'ADD_ITEM': {
      return [...items, action.item];
    }
    case 'REMOVE_ITEM': {
      debugger;
      return items.filter(x => x.id !== action.id);
    }
    default:
      return items;
  }
}

export default combineReducers({
  items
});

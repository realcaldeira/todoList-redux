import { createSelector } from 'reselect';
import { v1 } from 'uuid';
import { Types } from '../actions/list';

const initialState = {
  list: null,
  items: [],
}

export default function list(state = initialState, action) {
  // console.log(action.type)
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [
          ...state.items,
          { ...action.product, total: getItemTotal(action.product), id: v1(), checked: false }
        ]
      };

    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId)
      };

    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.productId)
      }

    default:
      return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity
}

function toggleItem(items, productId) {
  const index = items.findIndex(item => item.id === productId);
  return [
    ...items.slice(0, index),
    { ...items[index], checked: !items[index].checked },
    ...items.slice(index + 1)
  ];
}

export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0))

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
          { ...action.product, total: getItemTotal(action.product) }
        ]
      };
    default:
      return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity
}

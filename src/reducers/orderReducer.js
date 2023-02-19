import { ADD_ORDER, ORDER_ERROR } from '../actions/orderActions';

const initialState = {
  order: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ADD_ORDER:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

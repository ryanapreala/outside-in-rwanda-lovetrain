import axios from 'axios';

// Action types
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

// Action creators
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    // Make a POST request to Airtable API to add the new order to the "orders" table
    const response = await axios.post(process.env.key4vlp0WIH1Em5oB, {
      fields: {
        senderName: order.senderName,
        senderEmail: order.senderEmail,
        senderContact: order.senderContact,
        senderLocation: order.senderLocation,
        receiverName: order.receiverName,
        receiverEmail: order.receiverEmail,
        receiverContact: order.receiverContact,
        receiverLocation: order.receiverLocation,
        products: order.products,
      },
    });

    // If the request was successful, dispatch the success action with the response data
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // If the request failed, dispatch the failure action with the error message
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

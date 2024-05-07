import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const resp = await fetch(
        'https://redux-learning-4e346-default-rtdb.firebaseio.com/cart.json'
      );
      if (!resp.ok) throw new Error('Could not fetch data!');

      return await resp.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'Action is failed',
          title: 'Error!!!',
          message: err.message || 'Fetching Cart Data failed!',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sendung data...',
        message: 'Your data is sending...',
      })
    );

    const sendRequest = async () => {
      const resp = await fetch(
        'https://redux-learning-4e346-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );
      if (!resp.ok) throw new Error('Sending request failed');
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data succesfully',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'Action is failed',
          title: 'Error!!!',
          message: err.message || 'Sending Cart Data failed!',
        })
      );
    }
  };
};

import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = props => {
  const cartAmount = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      <span className={classes.badge}>My Cart {cartAmount}</span>
    </button>
  );
};

export default CartButton;

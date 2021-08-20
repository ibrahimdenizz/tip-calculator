import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    total: parseFloat(ownProps.price * ownProps.quantity).toFixed(2)
  };
};

const mapDispatchProps = (dispatch, ownProps) => ({
  remove: () => dispatch(removeItem(ownProps.uuid)),
  updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
  updateQuantity: (quantity) =>
    dispatch(updateQuantity(ownProps.uuid, quantity))
});

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(MenuItem);

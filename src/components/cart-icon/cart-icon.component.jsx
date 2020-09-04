import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick = { toggleCartHidden }>
    <ShoppingIcon className = 'shopping-icon' />
    <span className = 'item-count'>{itemCount}</span>
    </div>
)

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const matchStateProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(matchStateProps, mapDispatchProps)(CartIcon);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage, CartDropdownButton } from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ( { cartItems, history, dispatch }) => (
    <CartDropdownContainer>
    <CartItems>
    {
      cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key = {cartItem.id} item = { cartItem } />
        ))   
    ) :
     (
       <EmptyMessage>Your cart is empty</EmptyMessage>
     )
    }
    </CartItems>
    <CartDropdownButton onClick = {() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }
    }>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapToStateProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapToStateProps)(CartDropdown));
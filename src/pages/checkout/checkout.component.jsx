import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { selectCartItemsTotal } from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total}) => (
    <div className = 'checkout-page'>
     <div className = 'checkout-header'>
     <div className = 'header-block'>
     <span>Product</span>
     </div>
     <div className = 'header-block'>
     <span>Description</span>
     </div>
     <div className = 'header-block'>
     <span>Quantity</span>
     </div>
     <div className = 'header-block'>
     <span>Price</span>
     </div>
     <div className = 'header-block'>
     <span>Remove</span>
     </div>
     </div>
    { cartItems.map(cartItem => <CheckoutItem key = {cartItem.id} cartItem = {cartItem} /> )}
    <div className = 'total'>
    <span>TOTAL: ${total}</span>
    </div>
    <div className = 'test-warning'>
    *Please use this test card for payment*
    4242424242424242 - Exp: 10/20 - CVV: 123
    </div>
    <StripeCheckoutButton price = {total} />
     </div>
)

const mapStateProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartItemsTotal
})

export default connect(mapStateProps)(CheckoutPage);
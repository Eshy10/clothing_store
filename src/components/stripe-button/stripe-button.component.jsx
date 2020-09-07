import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKeys = 'pk_test_PXw7uY4CZFf7bLi6sn8gIX7o00edurKP4B';
    const onToken = token => {
        console.log(token)
        alert('transaction successful')
    }
    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Titan Clothing Store'
        billingAddress
        shippingAddress
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        description ={ `Your total price is $${price}`}
        amount = {stripePrice}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKeys}
        />
    )
}

export default StripeCheckoutButton;
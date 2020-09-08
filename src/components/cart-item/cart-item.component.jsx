import React from 'react';
import { CartItemContainer, ImageContainer, ItemDetails, Name } from './cart-item.styles'

const CartItem = ({item: {name, price, imageUrl, quantity}}) => (
<CartItemContainer>
<ImageContainer src = {imageUrl}  alt = 'item'/>
<ItemDetails>
<Name>{name}</Name>
<Name>
{quantity} x ${price}
</Name>
</ItemDetails>
</CartItemContainer>
)





export default CartItem;
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`

export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow-y: scroll;
`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
color: black;
`

export const CartDropdownButton = styled(CustomButton)`
margin-top: auto;
`
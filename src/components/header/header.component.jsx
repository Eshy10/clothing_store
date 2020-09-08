import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { HeaderConntainer, LogoContainer, OptionsConntainer, OptionContainerLink } from './header.styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderConntainer>
    <LogoContainer to ='/'>
    <Logo className = 'logo' />
    </LogoContainer>
    <OptionsConntainer>
    <OptionContainerLink to ='/shop'>
     SHOP
    </OptionContainerLink>
    <OptionContainerLink to ='/shop'>
     CONTACT
    </OptionContainerLink>
    {
        currentUser ? (
            <OptionContainerLink as='div' onClick = { () => auth.signOut()}>SIGN OUT</OptionContainerLink>
        )
        : (
            <OptionContainerLink to = '/signin'>SIGN IN</OptionContainerLink>
        ) }
        <CartIcon />
    </OptionsConntainer>
    { hidden ? null :  <CartDropdown /> }
    </HeaderConntainer>
)

const mapStateProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
})

export default connect(mapStateProps)(Header);
  

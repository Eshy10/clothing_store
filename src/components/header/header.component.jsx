import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header.component.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

const Header = ({ currentUser, hidden }) => (
    <div className = 'header'>
    <Link className = 'logo-container' to ='/'>
    <Logo className = 'logo' />
    </Link>
    <div className = 'options'>
    <Link className = 'option' to ='/shop'>
     SHOP
    </Link>
    <Link className = 'option' to ='/shop'>
     CONTACT
    </Link>
    {
        currentUser ? (
            <div className = 'option' onClick = { () => auth.signOut()}>SIGN OUT</div>
        )
        : (
            <Link className = 'option' to = '/signin'>SIGN IN</Link>
        ) }
        <CartIcon />
    </div>
    { hidden ? null :  <CartDropdown /> }
    </div>
)

const mapStateProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
})

export default connect(mapStateProps)(Header);
  

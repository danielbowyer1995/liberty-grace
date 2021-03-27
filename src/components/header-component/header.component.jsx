import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss'

const Header = ({ hidden }) => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <Link to="/">
                    <img className="logo" alt='logo' src="https://i.ibb.co/rH7f2d5/Logos-for-site.png"></img>
                </Link>
            </div>
            <div className='options'>
                <Link to="/shop">
                <span>SHOP</span>
                </Link>
                <span>CONTACT</span>
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})

export default connect(mapStateToProps)(Header)
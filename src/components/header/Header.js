import React from 'react';
import "./Header.css";
import Logo from "../../assets/amazon_PNG11.webp";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from '../../db/firebase';

const Header = () => {

    const [ { basket, user }, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <header>
            <div className="header">
                <Link to="/">
                    <img className="header_logo" src={Logo} alt="Amazon Logo" />
                </Link>
                <div className="header_search">
                    <input type="text" className="header_searchInput"/>
                    <SearchIcon className="header_searchIcon"/>
                </div>
                <nav>
                    <div className="header_nav">
                        <Link to={!user && "/login"}>
                            <div onClick={handleAuthentication} className="header_option">
                                <span className="header_optionLine1">Hello Guest</span>
                                <span className="header_optionLine2">{user ? "Sign Out" : "Sign In"}</span>
                            </div>
                        </Link>
                        <div className="header_option">
                            <span className="header_optionLine1">Returns</span>
                            <span className="header_optionLine2">Orders</span>
                        </div>
                        <div className="header_option">
                            <span className="header_optionLine1 header_prime">Your</span>
                            <span className="header_optionLine2 header_prime">Prime</span>
                        </div>
                        <Link to="/checkout">
                            <div className="header_optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
                            </div>
                        </Link>
                    </div>
                </nav>
              
            </div>
        </header>
   
    )
}

export default Header;

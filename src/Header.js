import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function Header() {
  const[{basket, user}, dispatch]=useStateValue();

  const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
  
      return (
            <div className='header'>
                  <Link to='/'>
                    <img className='header_logo' src='http://pngimg.com/uploads/twitter/small/twitter_PNG38.png' />
                  </Link>
                  <div className="header_search">
                        <input type="text" className="header_searchInput" />
                        <SearchIcon className='header_searchIcon' />
                  </div>
                        {/* logo */}
                        <div className="header_nav">
                             <Link to={!user && '/login'}>
                                    <div onClick={handleAuthenticaton} className='header_option'>
                                          <span className="header_optionOne">Hello {!user ? 'Guest' : user.email} </span>
                                          <span className="header_optionTwo">{user? 'Sign Out' : 'Sign In'}</span>
                                    </div>
                              </Link>
                              <Link to='/orders'>
                                    <div className="header_option">
                                          <span className="header_optionOne">Returns</span>
                                          <span className="header_optionTwo">Orders</span>
                                    </div>
                              </Link>
                              <div className="header_option">
                                    <span className="header_optionOne">Prime</span>
                                    <span className="header_optionTwo">Yours</span>
                              </div>
                              <Link to='/checkout'>
                                    <div className="header_optionBasket">
                                          <ShoppingBasket />
                                          <span className="header_optionTwo header_basketCount">{basket?.length}</span>
                                    </div>
                              </Link>
                        </div>
            </div>
      )
}

export default Header

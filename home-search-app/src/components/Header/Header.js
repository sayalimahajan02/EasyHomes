import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Header/Header.scss';
import Logo from './../images/homeLogo.PNG';

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='header-wrapper'>
        <header>
          <nav className='left-nav'>
            <NavLink to='/aboutus'>About Us</NavLink>
            <NavLink to='/property'>Buy</NavLink>
            <NavLink to='/property'>Sell</NavLink>
          </nav>
          <div className='logo'>
            <a href='/'><img src={Logo} className="homeLogo" />
              <span>Easy Homes</span></a>
          </div>
          <nav className='right-nav'>
            <NavLink to='/login'>SignIn</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/faq'>FAQs</NavLink>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
import React from 'react';
import './../components/Header.scss';
import Logo from './images/homeLogo.PNG';

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='header-wrapper'>
        <header>
          <nav className='left-nav'>
            <a href='/property'>Buy</a>
            <a href='/property'>Sell</a>
          </nav>
          <div className='logo'>
            <a href='/'><img src={Logo} className="homeLogo" />
              <span>Easy Homes</span></a>
          </div>
          <nav className='right-nav'>
            <a href='/login'>SignIn</a>
            <a href='/signup'>SignUp</a>
            <a href='/property'>Help</a>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
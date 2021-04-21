import React from 'react';
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './../Header/Header.scss';
import Logo from './../images/homeLogo.PNG';
import User from './../images/iconfinder_user_285655.png';


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: ''
    }
    this.logoutHandle = this.logoutHandle.bind(this);
  }
  logoutHandle(e) {
    e.preventDefault();
    localStorage.clear();
    this.setState({ loggedIn: false });
    this.setState({ username: '' });
    window.location.assign('/');
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('loggedIn') });
    this.setState({ username: localStorage.getItem('username') });
  }

  render() {
    return (
      <div className='header-wrapper'>
        <header>
          <nav className='left-nav'>
            <NavLink to='/aboutus'>ABOUT US</NavLink>
            {
              (this.state.loggedIn != null && this.state.loggedIn)
                ? this.state.username == 'admin' ? null : <NavLink to='/property'>BUY</NavLink>
                : <NavLink to='/login'>BUY</NavLink>
            }

            {
              (this.state.loggedIn != null && this.state.loggedIn)
                ? this.state.username == 'admin' ? null : <NavLink to='/Seller'>SELL</NavLink>
                : <NavLink to='/login'>SELL</NavLink>
            }
          </nav>
          <div className='logo'>
            <a href='/'><img src={Logo} className="homeLogo" />
              <span>Easy Homes</span></a>
          </div>
          <nav className='right-nav'>
            {!this.state.loggedIn ? <NavLink to='/login'>SIGN IN</NavLink> : null}
            {!this.state.loggedIn ? null : <NavLink onClick={this.logoutHandle} to='/'>LOGOUT</NavLink>}
            {!this.state.loggedIn ? <NavLink to='/signup'>SIGN UP</NavLink> : null}
            <NavLink to='/faq'>FAQs</NavLink>
            {!this.state.loggedIn ? <NavLink to='/'> GUEST </NavLink>
              : localStorage.getItem('username') == 'admin'
                ? <NavLink to='/admin'> Admin </NavLink>
                : <NavLink to='/profile'>{this.state.username}</NavLink>}
          <img className="userImg" src={User}/>

          </nav>



        </header>
      </div>
    )
  }
}

export default Header;
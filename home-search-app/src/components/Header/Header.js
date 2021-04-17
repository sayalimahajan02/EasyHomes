import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Header/Header.scss';
import ToggleDisplay from 'react-toggle-display';
import Logo from './../images/homeLogo.PNG';

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      loggedIn : false,
      username : ''
    }
this.logoutHandle=this.logoutHandle.bind(this);
  }
logoutHandle(e){
  e.preventDefault();
  localStorage.clear();
  this.setState({loggedIn : false});
  this.setState({username : ''});
}

componentDidMount(){
  this.setState({loggedIn : localStorage.getItem('loggedIn')});
  this.setState({username : localStorage.getItem('username')});
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
          {!this.state.loggedIn ? <NavLink to='/login'>SignIn</NavLink> : null}
          {!this.state.loggedIn ? null : <NavLink onClick={this.logoutHandle} to='/'>Logout</NavLink> }
          {!this.state.loggedIn ? <NavLink to='/signup'>SignUp</NavLink> : null}
            <NavLink to='/faq'>FAQs</NavLink>
            {!this.state.loggedIn ? <NavLink to='/'> Guest </NavLink> : null}
          {!this.state.loggedIn ? null : <NavLink to='/profile'>{this.state.username}</NavLink> }
      
         
            </nav>
          
        
          
        </header>
      </div>
    )
  }
}

export default Header;
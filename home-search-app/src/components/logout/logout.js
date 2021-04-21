import React from 'react';
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './../Header/Header.scss';
import ToggleDisplay from 'react-toggle-display';
import Logo from './../images/homeLogo.PNG';

class Logout extends React.Component {

    constructor(props) {
      super(props)
      this.state={
        loggedIn : false,
        username : ''
      }
  this.logoutHandle=this.logoutHandle.bind(this);
    }
    
    componentDidMount(){
        // console.log("inside method");
        this.logoutHandle();
    }

    //handle logout
  logoutHandle(){
      // console.log("loggin out");
    localStorage.clear();
    this.setState({loggedIn : false});
    this.setState({username : ''});
    return(
        <Redirect to="/"/>
    )
  }
}  
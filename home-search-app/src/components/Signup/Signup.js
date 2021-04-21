import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import signupService from '../../services/user.service';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Header from './../Header/Header';
import './Signup.scss';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.RegisterMethod = this.RegisterMethod.bind(this);
    this.onChangeOfEmail = this.onChangeOfEmail.bind(this);
    this.onChangeOfPassword = this.onChangeOfPassword.bind(this);
    this.onChangeOfConfirmPassword = this.onChangeOfConfirmPassword.bind(this);
    this.responseErrorGoogle = this.responseErrorGoogle.bind(this);
    this.responseSuccessGoogle = this.responseSuccessGoogle.bind(this);
    // state for signup component
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      users: [],
      displayMessage: "",
      data: [],
      signUpButton: "",
      signInButton: ""
    };
  }

  onChangeOfEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeOfPassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeOfConfirmPassword(e) {
    this.setState({ confirmpassword: e.target.value });
  }

  RegisterMethod(e) {
    e.preventDefault();
    if (this.state.email.trim() == "" || this.state.password.trim() == "") {
      alert('Please enter Email id and password properly');
      return;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email.match(mailformat)) {
      alert('Please enter valid Email format');
      return;
    }

    if (this.state.confirmpassword.trim() == "") {
      alert('Please enter Confirm password');
      return;
    }
    if (this.state.password.trim() != this.state.confirmpassword.trim()) {
      alert('Confirm password and password do not match, Please enter properly');
      return;
    }

    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].emailId === this.state.email) {
        this.setState({ displayMessage: 'User with this email address already registered' });
        return;
      }
    }
    this.setState({ displayMessage: '' });

    //actual post call
    const tempArray = [];
    const apiurl = "http://localhost:3000/records";
    fetch(apiurl, {

      method: 'POST',

      headers: {

        Accept: 'application/json',

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        emailId: this.state.email,
        password: this.state.password,
        contact: ""
      })
    })
    // localStorage.setItem('username','')
    // localStorage.setItem('loggedIn',false);
    alert("Congratulations !! Please signIn now")
    this.props.history.push("/login");
    window.location.reload();
  }

  //google starts
  responseSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].emailId === response.profileObj.email) {
        this.setState({ displayMessage: 'User with this email address already registered. Please login' });
        return;
      }
    }
    this.setState({ displayMessage: '' });
    //signupService.register(response.profileObj.email, response.tc.login_hint)


    //actual post call
    const tempArray = [];
    const apiurl = "http://localhost:3000/records";
    fetch(apiurl, {

      method: 'POST',

      headers: {

        Accept: 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        emailId: response.profileObj.email,
        password: response.tc.login_hint

      })
    })


    alert("Congratulations !! Please signIn now usign google account")
    this.props.history.push("/login");
    window.location.reload();

  }
  responseErrorGoogle = (response) => {
    console.log(response);
  }

  componentWillMount() {
    this.getData()
  }
  getData() {
    const tmpArray = [];
    fetch('http://localhost:3000/records/')
      .then(response => response.json())
      .then(response => {
        for (var i = 0; i < response.length; i++) {
          tmpArray.push(response[i])
        }

        this.setState({
          users: tmpArray
        })

      })
      .catch(error => this.setState({ error }));
  }



  //google ends
  render() {
    return (
      <>
        <div className="formOuter">
          <div className="form-wrap">
            <Form className="formEle" onSubmit={this.RegisterMethod}>

              <label className="lbl" >Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeOfEmail}

              /> {this.state.displayMessage}

              <label>Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangeOfPassword}
              />

              <label>Confirm Password</label>
              <Input
                type="password"
                className="form-control"
                name="Confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.onChangeOfConfirmPassword}
              />

              <div className="btns">
                <button className="btnSignup">Signup</button>
                <br />

                <GoogleLogin
                  clientId="402608281823-mfler2nvm70fq6jab80330m767f7rtde.apps.googleusercontent.com"
                  buttonText="SignUp with Google"
                  onSuccess={this.responseSuccessGoogle}
                  onFailure={this.responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>


            </Form>
          </div>
        </div>
      </>
    );
  }
}

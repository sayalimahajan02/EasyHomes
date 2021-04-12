import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import signupService from '../../services/user.service';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.RegisterMethod=this.RegisterMethod.bind(this);
    this.onChangeOfEmail=this.onChangeOfEmail.bind(this);
    this.onChangeOfPassword=this.onChangeOfPassword.bind(this);
  
    
    // state for signup component
    this.state = {
      email: "",
      password: ""
    };
  }
 
  onChangeOfEmail(e){
    this.setState({email:e.target.value});
  }
  onChangeOfPassword(e){
    this.setState({password:e.target.value});
  }
  RegisterMethod(e){
e.preventDefault();
signupService.register(this.state.email,this.state.password).then(response => response.data.emailId)
  }


  render() {
//google starts
const responseSuccessGoogle = (response) => {
  
}
//google ends
    
    return (
      <div>
          <Form onSubmit={this.RegisterMethod}>
          
                   <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeOfEmail}
                   
                    />

                   <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangeOfPassword}
                  />
                  <button>Signup</button>
          </Form>

        ----------------OR-------------------
        <br></br>
     </div>
    );
  }
}

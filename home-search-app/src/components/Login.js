import React from 'react';
import './Login.scss';

class Login extends React.Component{

    constructor(props)
{
	super(props)
	let loggedIn=false
    this.state={
	emailId:"",
	password:"",
	loggedIn:false,
	users:[]
};
this.onChange=this.onChange.bind(this)
this.submitForm=this.submitForm.bind(this)
}

onChange(e)
{
	this.setState({
		[e.target.name]:e.target.value
	})
}

componentWillMount(){
	this.getData()
}
getData(){
	const tmpArray = [];
	fetch('http://localhost:3000/records/')
	 .then(response => response.json())
	.then(response => {
		for (var i = 0; i < response.length; i++) {
			tmpArray.push(response[i])
		}
	
		this.setState({
			data: tmpArray
		})

	})
	.catch(error => this.setState({ error }));
  }

  submitForm(e)
{
	e.preventDefault()
	const {email,password} =this.state
	for (const [index, value] of this.state.data.entries()) {
		if(value.emailId==email && value.password==password){
			this.setState({
				loggedIn:true
				
			})
			// sessionStorage.setItem('userID',value.id);
			// sessionStorage.setItem('token','abcd')
			return;
		}
	  }
	  this.setState({    
		email:"",
		password:""
	 })
	  alert("Credentials Invalid")

}


render(){
    return(
    <div>
        <div className="login-form">
   				 <form onSubmit={this.submitForm}>
					<h2 className="text-center">Log in</h2>       
					<div className="form-group">
						<input type="text" value={this.state.email} name="email" onChange={this.onChange} placeholder="Email" required="required"/>
					</div>
					<div className="form-group">
						<input type="password"  name= "password" value={this.state.password} onChange={this.onChange} placeholder="Password" required="required"/>
					</div>
					<div>
						<button type="submit">Log in</button>
					</div>      
    			</form>
    	</div>
    </div>
    )
}

}

export default Login;
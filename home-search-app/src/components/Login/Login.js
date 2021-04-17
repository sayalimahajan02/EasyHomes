import React from 'react';
import './Login.scss';
import GoogleLogin from 'react-google-login';
import Header from './../Header/Header';

class Login extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			emailId: "",
			password: "",
			displayMessage: '',
			users: [],
			username:"",
			loggedIn: false
			

		};
		this.onChange = this.onChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
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
					data: tmpArray
				})

			})
			.catch(error => this.setState({ error }));
	}

	responseSuccessGoogle = (response) => {
		console.log(response.profileObj);
		for (let i = 0; i < this.state.data.length; i++) {
			if (this.state.data[i].emailId === response.profileObj.email && this.state.data[i].password === response.tc.login_hint) {
				console.log('Successful login using Google');
				//redirect to home page
				this.setState({
					email: this.state.data[i].emailId,
					password: this.state.data[i].password,
					loggedIn: true,
					username : this.state.data[i].emailId.substring(0, this.state.data[i].emailId.lastIndexOf("@"))
				})
				// sessionStorage.setItem('userID',value.id);
				localStorage.setItem('loggedIn',true);
				localStorage.setItem('username',this.state.data[i].emailId.substring(0, this.state.data[i].emailId.lastIndexOf("@")));
				localStorage.setItem('user',JSON.stringify(this.state.data[i]));
				//let userProfObj=JSON.parse(localStorage.getItem('user'));
				this.props.history.push("/");
				window.location.reload();
			}
		}

		this.setState({
			email: "",
			password: "",
			displayMessage: 'User with email address is not registered , please register with google account first then try login.'
		})
	}
	
// componentDidMount(){


// }
componentWillUpdate(nexProps, nextState){
	//localStorage.setItem('loggedIn',this.state.loggedIn);
	//localStorage.setItem('username',this.state.username);
}
	responseErrorGoogle = (response) => {
		console.log(response);
	}
	submitForm(e) {
		e.preventDefault()
		const { email, password } = this.state
		for (let i = 0; i < this.state.data.length; i++) {
			if (this.state.data[i].emailId === email && this.state.data[i].password === password) {
				this.setState({
					email: this.state.data[i].emailId,
					password: this.state.data[i].password,
					username: this.state.data[i].emailId.substring(0, this.state.data[i].emailId.lastIndexOf("@")),
					loggedIn: true
				})

				localStorage.setItem('loggedIn',true);
				localStorage.setItem('username',this.state.data[i].emailId.substring(0, this.state.data[i].emailId.lastIndexOf("@")));
				localStorage.setItem('user',JSON.stringify(this.state.data[i]));
				this.props.history.push("/");
				window.location.reload();

			}
		}
		this.setState({
			email: "",
			password: "",
			displayMessage: 'Credentials Invalid'
		})


	}


	render() {
		return (
			<div>
				<div className="login-form">
					<form onSubmit={this.submitForm}>
						<h2 className="text-center">Log in</h2>
						<div className="form-group">
							<input type="text" value={this.state.email} name="email" onChange={this.onChange} placeholder="Email" required="required" />
							{this.state.displayMessage}
						</div>
						<div className="form-group">
							<input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required="required" />
						</div>
						<div>
							<button type="submit">Log in</button>
						</div>
					</form>
				</div>
				<br></br><br></br>
				<GoogleLogin
					clientId="402608281823-mfler2nvm70fq6jab80330m767f7rtde.apps.googleusercontent.com"
					buttonText="SignIn with Google"
					onSuccess={this.responseSuccessGoogle}
					onFailure={this.responseErrorGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		)
	}

}

export default Login;
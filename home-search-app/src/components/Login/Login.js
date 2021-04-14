import React from 'react';
import './Login.scss';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {

	constructor(props) {
		super(props)
		let loggedIn = false
		this.state = {
			emailId: "",
			password: "",
			displayMessage: '',
			loggedIn: false,
			users: []
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
		console.log(response);
		console.log(response.profileObj);
		for (let i = 0; i < this.state.data.length; i++) {
			if (this.state.data[i].emailId == response.profileObj.email && this.state.data[i].password == response.tc.login_hint) {
				console.log('Successful login using Google');
				//redirect to home page
				this.setState({
					email: this.state.users[i].emailId,
					password: this.state.users[i].password,
					loggedIn: true
				})
				// sessionStorage.setItem('userID',value.id);
				// sessionStorage.setItem('token','abcd')
				return;
			}
		}

		this.setState({
			email: "",
			password: "",
			displayMessage: 'User with email address is not registered , please register with google account first then try login.'
		})
	}

	responseErrorGoogle = (response) => {
		console.log(response);
	}
	submitForm(e) {
		e.preventDefault()
		const { email, password } = this.state
		for (const [index, value] of this.state.data.entries()) {
			if (value.emailId == email && value.password == password) {
				this.setState({
					loggedIn: true

				})
				// sessionStorage.setItem('userID',value.id);
				// sessionStorage.setItem('token','abcd')
				return;
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
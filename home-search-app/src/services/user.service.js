import axios from "axios";
import React from 'react';

const apiurl = "http://localhost:3000/records";

class UserService extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: []
		}

	}

  // post username email and password after registering account
  register( emailId, password) {
    return axios.post(apiurl, {
        emailId,
      password
    });

}

//user registration
register(){

}

}
export default new UserService();
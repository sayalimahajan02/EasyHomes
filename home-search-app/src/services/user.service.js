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

//   register( emailId, password) {
//   const requestOptions = {
//     method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(
//             { 
//              emailId : emailId,
//              password : password
//             })
//     };
//    let tmpArray=[]
//     fetch(apiurl, requestOptions)
//    .then(response => response.json()) 
//    .then(response =>{
//       alert(response);
//       for (var i = 0; i < response.length; i++) {
//         tmpArray.push(response[i])
//       }
//     })
//     return tmpArray;
// }

register(){
  // const tmpArray = [];
  // const requestOptions = {
  //       method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(
  //               { 
  //                emailId : emailId,
  //                password : password
  //               })
  //       };
	// 	fetch(apiurl,requestOptions)
	// 		.then(response => response.json())
	// 		.then(response => {
	// 			for (var i = 0; i < response.length; i++) {
	// 				tmpArray.push(response[i])
	// 			}

	// 			this.setState({
	// 				data: tmpArray
	// 			})

	// 		})
	// 		.catch(error => this.setState({ error }));
}

}
export default new UserService();
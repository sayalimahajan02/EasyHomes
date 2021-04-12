import axios from "axios";

const apiurl = "http://localhost:3000/records";

class UserService {

  // post username email and password after registering account
  register( emailId, password) {
    return axios.post(apiurl, {
        emailId,
      password
    });

}



}
export default new UserService();
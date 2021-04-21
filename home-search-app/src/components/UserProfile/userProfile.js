import React from 'react';
import './userProfile.scss';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropertyDetails from '../propertyDetails/propertyDetails';


class userProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userEmail: "",
            id: "",
            username: "",
            propBought: [],
            propSold: [],
            message: "",
            contactNum: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateContact = this.updateContact.bind(this)
    }

    //to set state
    handleChange = (event, field) => {
        this.setState({ [field]: event.target.value })
    }

    //on change
    onChange(e) {
        this.setState({
            contactNum: e.target.value
        })
    }

//check user details
    loadUserDetails() {
        const temp = JSON.parse(localStorage.getItem('user'))
        this.setState({
            userEmail: temp.emailId,
            username: temp.emailId.substring(0, temp.emailId.lastIndexOf('@')),
            id: temp.id,
            contactNum: temp.contact
        })
    }

    componentWillMount() {
        if (localStorage.getItem('username') == null || localStorage.getItem('username') == 'admin') {
            alert('You do not have permission to view this page. Please login with proper user');
            window.location.assign('/');
        }
        this.loadUserDetails();
        this.getData();
    }
    
//update contact details
    updateContact() {
        const contact = this.state.contactNum
        const pattern = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}")
        if (pattern.test(contact)) {
            this.putData(contact)
            this.setState({
                message: "contact updated successfully"
            })
        }
        else {
            this.setState({
                message: "enter contact in xxx-xxx-xxxx"
            })
        }

    }

    //get data
    getData() {

        const tmpBought = [];
        const tmpSold = [];
        fetch('http://localhost:3000/homeSearch', {
            'Cache-Control': 'no-cache'
        })
            .then(response => response.json())
            .then(response => {
                for (let i = 0; i < response.length; i++) {
                    if (response[i].buyer) {
                        if (JSON.parse(response[i].buyer).emailId === this.state.userEmail) {
                            tmpBought.push({
                                propName: response[i].propertyName,
                                propId: response[i].id,
                                propImg: response[i].selectedImages[0]
                            })
                        }

                        if (response[i].seller) {
                            if (response[i].seller.emailId === this.state.userEmail) {
                                tmpSold.push({
                                    propName: response[i].propertyName,
                                    propId: response[i].id,
                                    propImg: response[i].selectedImages[0]
                                })
                            }
                        }
                    }
                }
                this.setState({
                    propBought: tmpBought,
                    propSold: tmpSold
                })

            })

            .catch(error => this.setState({ error }));
    }


    //put data
    async putData(cont) {
        const apiUrl = 'http://localhost:3000/records/' + this.state.id;
        await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    contact: cont
                })
        }).then(response => {
            console.log("response:" + response.body)
        })
            .catch(error => {
                console.log("error:" + error)
            })

    }

    render() {
        return (
            <>
                <div className="userProf">
                    <div className="oneRow">
                        <div className="oneSub">Hello,
                    </div>
                        <div className="userName">
                            {this.state.username}
                        </div>
                        <div className="update-details">
                            <div>
                                <label className="updLabel">Update Contact</label>
                                <input className="updInp" type="tel" placeholder="123-456-7890" defaultValue={this.state.contactNum} onChange={this.onChange}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input><br />
                                <button className="updateBtn" onClick={this.updateContact}>Update</button>
                                <div>{this.state.message}</div>
                            </div>

                        </div>
                    </div>
                    <div class="sample-box">
                        <h5>Properties you Bought</h5>
                        {this.state.propBought.length == 0 ? 'No items to display' : <ul>
                            {this.state.propBought.map(item => (
                                <li key={item}>
                                    <div>
                                        <Link to={{ pathname: `/propertyDetails`, state: { propertyId: item.propId } }}>
                                            <img src={item.propImg}></img>
                                        </Link><br></br>
                                        <div className="propB">{item.propName}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>}
                    </div>
                    <div class="sample-box">
                        <h5>Properties you Sold</h5>
                        {this.state.propSold.length == 0 ? 'No items to display' :
                            <ul>
                                {this.state.propSold.map(item => (
                                    <li key={item}>
                                        <div>
                                            <Link to={{ pathname: `/propertyDetails`, state: { propertyId: item.propId } }}>
                                                <img src={item.propImg}></img>
                                            </Link><br></br>
                                            <div className="propS">{item.propName}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default userProfile;
import React from 'react';
import './userProfile.scss';

class userProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
           data:[],
           userEmail:"",
           id:"",
           username:"",
           propBought:[],
           propSold:[],
           message : "",
          }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateContact = this.updateContact.bind(this)

    }

    //to set state
    handleChange=(event,field)=>{ 
    this.setState({[field]:event.target.value})
    }

    //on change
    onChange(e) {
		this.setState({
			contact: e.target.value
		})
	}


    loadUserDetails(){
        const temp = JSON.parse(localStorage.getItem('user'))
        this.setState({
            userEmail: temp.emailId,
            username: temp.emailId.substring(0,temp.emailId.lastIndexOf('@'))

        })
    }

    componentWillMount(){
        this.loadUserDetails();
        this.getData();
    }

    updateContact(){
        const contact = this.state.contact
        const pattern= new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}")
        if(pattern.test(contact)){
            this.putData(contact)
            console.log("contact "+ contact)
            this.setState({
                message:"contact updated successfully"
            })
        }
        else{
            this.setState({
                message:"enter contact correctly"
            })
        }
        
    }

    //get data
    getData(){
        
        const tmpBought = [];
        const tmpSold = [];
        fetch('http://localhost:3000/homeSearch/',{
            'Cache-Control': 'no-cache'
        })
        .then(response => response.json())
        .then(response => {
        for (var i = 0; i < response.length; i++) {
                // if(JSON.parse(response[i].buyer.emailId) === this.state.userEmail){
                //     tmpBought.push({propName : response[i].propertyName, propId : response[i].id })
                //     console.log("temp "+ tmpBought)
                // }
                tmpBought.push(response[i])
                
        }
        console.log("ddffff "+tmpBought)
        this.setState({
            propBought : tmpBought
        })
        
        })
        .then(response2 => {
            
            for (var i = 0; i < response2.length; i++) {
                if(response2[i].seller){
                    if(JSON.parse(response2[i].seller).emailId === this.state.userEmail){
                        tmpSold.push({propName : response2[i].propertyName, propId : response2[i].id })
                    }
                }
                else{
                    this.setState({
                        message : "No Properties sold yet"
                    })
                }
            }
            this.setState({
                propSold : tmpSold
            })
            })
        
        .catch(error => this.setState({ error }));
    }


    //put data
    putData(cont) {
        fetch('http://localhost:3000/records/607b7aefd58b4120db406090', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contact: cont
            })
        }).then(response => {
            console.log("response:" + response.body)
        })
            .catch(error => {
                console.log("error:" + error)
            })
  
    }
  
    render(){
        return(
                <>
                    <div>Hello {this.state.username},</div>
                    <div className = "update-details">
                        <div>{this.state.userId}</div>
                    
                        <div>
                            <label>Update Contact</label>
                            <input type="tel" placeholder="123-456-7890" value = {this.state.contact} onChange = {this.onChange} 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                            <button onClick={this.updateContact}>Update</button>
                            <div>{this.state.message}</div>
                        </div>
                        {/* <div>
                            <label>Update EmailId</label>
                            <input type="email" value = {this.state.email} onChange={this.onChange}></input>
                            <button onClick={this.updateEmail}>Update</button>
                        </div>   */}
                    </div>
                    <div class = "sample-box">
                        <div>{this.state.propBought}</div>
                    <h5>Properties you Bought</h5>
                    <ul>
                        {this.state.propBought.map(item => (
                            <li key={item}>
                            <p><a href = 'http://localhost:4000/propertyDetails'>Property Name : {item.propName}</a></p>
                            </li>
                        ))}
                    </ul>

                    </div>
                    <div class = "sample-box">
                        <h5>Properties you Sold</h5>
                        <ul>
                            {this.state.propSold.map(item => (
                                <li key={item}>
                                <p><a href = 'http://localhost:4000/propertyDetails'>Property Name : {item.propName}</a></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class = "sample-box"></div>
                </>
        )}
}

export default userProfile;
import React, {Component} from 'react';
import './../Seller/Seller.scss';
import axios from "axios";
class Seller extends Component {

     constructor(props) {
     super(props)
     this.state = {
        propertyId: '',
        propertyName: '',
        propertyDesc: '',
        propertyType: '',
        propertySqftArea: '',
        propertyPrice: '',
        propertyStreet: '',
        propertyCity: '',
        propertyState: '',
        propertyZipcode: '',
        propertyBuildDate: '',
        selectedImages: [],
     }
 }

 handlepropertyIdChange = (event) => {
    this.setState({
        propertyId: event.target.value
        })
 }

 handlepropertyNameChange = (event) => {
    this.setState({
        propertyName: event.target.value
        })
 }

 handlepropertyDescChange = (event) => {
    this.setState({
        propertyDesc: event.target.value
        })
 }
 handlepropertyTypeChange = (event) => {
    this.setState({
        propertyType: event.target.value
        })
 }
 handlepropertySqftAreaChange = (event) => {
    this.setState({
        propertySqftArea: event.target.value
        })
 }
 handlepropertyPriceChange = (event) => {
    this.setState({
        propertyPrice: event.target.value
        })
 }
 handlepropertyStreetChange = (event) => {
    this.setState({
        propertyStreet: event.target.value
        })
 }
 handlepropertyCityChange = (event) => {
    this.setState({
        propertyCity: event.target.value
        })
 }
 handlepropertyStateChange = (event) => {
    this.setState({
        propertyState: event.target.value
        })
 }
 handlepropertyZipcodeChange = (event) => {
    this.setState({
        propertyZipcode: event.target.value
        })
 }
 handlepropertyBuildDateChange = (event) => {
    this.setState({
        propertyBuildDate: event.target.value
        })
 }

 getData() {
    
    const tmpArray = [];
    fetch('http://localhost:3000/homeSearch/',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

 handleSubmit = (event) => {
    
     event.preventDefault()
     this.getData();
 }

 handleImageChange = (e) => {
    if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        this.setState({
            
            selectedImages:[...this.state.selectedImages,...filesArray]

        })
        console.log(filesArray);
        console.log(this.state.selectedImages);

        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) 
        );
    }
};

renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
        console.log("pic is: ",photo);
        return <img src={photo} alt="" key={photo} />;
        
    });
};

render() {
        return(
            <div className = "bkImage">
             <form onSubmit= {this.handleSubmit}>

            <div className= "formContainer">
                
                <div className="lblContainer">
                    <label className="desc">Property Id :</label>
                    <input className= "inputProperty" type='number' value= {this.state.propertyId} onChange = {this.handlepropertyIdChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Name :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyName} onChange = {this.handlepropertyNameChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Description :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyDesc} onChange = {this.handlepropertyDescChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Type :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyType} onChange = {this.handlepropertyTypeChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Area :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertySqftArea} onChange = {this.handlepropertySqftAreaChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Price :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyPrice} onChange = {this.handlepropertyPriceChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Street :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyStreet} onChange = {this.handlepropertyStreetChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">City :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyCity} onChange = {this.handlepropertyCityChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">State :</label>
                    <input className= "inputProperty" type='text' value= {this.state.propertyState} onChange = {this.handlepropertyStateChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">ZipCode :</label>
                    <input className= "inputProperty" type='number' value= {this.state.propertyZipcode} onChange = {this.handlepropertyZipcodeChange}/>
                </div>
                <div className="lblContainer">
                <label className="desc">Build Date :</label>
                    <input className= "inputProperty" type='date' value= {this.state.propertyBuildDate} onChange = {this.handlepropertyBuildDateChange}/>
                </div>
                <label htmlFor="file" className="labelImg">
                      <i className="material-icons">add_a_photo</i>
                    </label>
                
                <button onClick={this.handleSubmit} className="btnprop" type="submit">Add Property</button>
                
                </div>
                </form>
                

                <div className="imgUp">
                    
                    <input className= "inputImg" type = "file" multiple id="file"  onChange={this.handleImageChange}/>
                    <div className = "label-holder">
                    
                    </div>

                    <div className="result">
                        {this.renderPhotos(this.state.selectedImages)}
                    </div>

                </div>
            </div>
        )
    }
}

export default Seller; 
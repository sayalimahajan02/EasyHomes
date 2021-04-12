import React, {Component} from 'react';
import './../components/Seller.css'

class Seller extends Component {

 constructor(props) {
     super(props)
     this.state = {
       PropertyId: '',
       PropertyName: '',
       PropertyDescription: '',
       PropertyType: '',
       PropertyArea: '',
       PropertyPrice: '',
       PropertyStreet: '',
       PropertyCity: '',
       PropertyState: '',
       PropertyZipCode: '',
       PropertyBuildDate: ''  
     }
 }

 handlePropertyIdChange = (event) => {
    this.setState({
        PropertyId: event.target.value
        })
 }

 handlePropertyNameChange = (event) => {
    this.setState({
        PropertyName: event.target.value
        })
 }

 handlePropertyDescriptionChange = (event) => {
    this.setState({
        PropertyDescription: event.target.value
        })
 }
 handlePropertyTypeChange = (event) => {
    this.setState({
        PropertyType: event.target.value
        })
 }
 handlePropertyAreaChange = (event) => {
    this.setState({
        PropertyArea: event.target.value
        })
 }
 handlePropertyPriceChange = (event) => {
    this.setState({
        PropertyPrice: event.target.value
        })
 }
 handlePropertyStreetChange = (event) => {
    this.setState({
        PropertyStreet: event.target.value
        })
 }
 handlePropertyCityChange = (event) => {
    this.setState({
        PropertyCity: event.target.value
        })
 }
 handlePropertyStateChange = (event) => {
    this.setState({
        PropertyState: event.target.value
        })
 }
 handlePropertyZipcodeChange = (event) => {
    this.setState({
        PropertyZipCode: event.target.value
        })
 }
 handlePropertyBuildDateChange = (event) => {
    this.setState({
        PropertyBuildDate: event.target.value
        })
 }

 handleSubmit = (event) => {
     alert(`${this.state.PropertyId} ${this.state.PropertyName} ${this.state.PropertyDescription} ${this.state.PropertyType} ${this.state.PropertyArea} 
     ${this.state.PropertyPrice} ${this.state.PropertyStreet} ${this.state.PropertyCity} ${this.state.PropertyState} ${this.state.PropertyZipCode} 
     ${this.state.PropertyBuildDate}`)
     event.preventDefault()
 }

render() {
        return(
            <form onSubmit= {this.handleSubmit}>
                <div className= "form">
                <div>
                    <label>PropertyId</label>
                    <input type='number' value= {this.state.PropertyId} onChange = {this.handlePropertyIdChange}/>
                </div>
                <div>
                <label>Property Name</label>
                    <input type='text' value= {this.state.PropertyName} onChange = {this.handlePropertyNameChange}/>
                </div>
                <div>
                <label>Property Description</label>
                    <input type='text' value= {this.state.PropertyDescription} onChange = {this.handlePropertyDescriptionChange}/>
                </div>
                <div>
                <label>Property Type</label>
                    <input type='text' value= {this.state.PropertyType} onChange = {this.handlePropertyTypeChange}/>
                </div>
                <div>
                <label>Property Area</label>
                    <input type='text' value= {this.state.PropertyArea} onChange = {this.handlePropertyAreaChange}/>
                </div>
                <div>
                <label>Property Price</label>
                    <input type='text' value= {this.state.PropertyPrice} onChange = {this.handlePropertyPriceChange}/>
                </div>
                <div>
                <label>Property Street</label>
                    <input type='text' value= {this.state.PropertyStreet} onChange = {this.handlePropertyStreetChange}/>
                </div>
                <div>
                <label>Property City</label>
                    <input type='text' value= {this.state.PropertyCity} onChange = {this.handlePropertyCityChange}/>
                </div>
                <div>
                <label>Property State</label>
                    <input type='text' value= {this.state.PropertyState} onChange = {this.handlePropertyStateChange}/>
                </div>
                <div>
                <label>Property ZipCode</label>
                    <input type='text' value= {this.state.PropertyZipCode} onChange = {this.handlePropertyZipCodeChange}/>
                </div>
                <div>
                <label>Property Build Date</label>
                    <input type='text' value= {this.state.PropertyBuildDate} onChange = {this.handlePropertyBuildDateChange}/>
                </div>
                <button type="submit">Add Property</button>
                </div>
            </form>
        )
    }
}

export default Seller; 
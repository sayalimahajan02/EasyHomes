import React, {Component} from 'react';
import './../Seller/Seller.scss';

class Seller extends Component {

     constructor(props) {
     super(props)
     this.state = {
        propertyId: '',
        propertyName: '',
        propertyDesc: '',
        propertyType: '',
        bed: '',
        bath:'',
        propertySqftArea: '',
        propertyPrice: '',
        propertyStreet: '',
        propertyCity: '',
        propertyState: '',
        propertyZipcode: '',
        propertyBuildDate: '',
        image: '',
        loading:'false',
        previewSource: '',
        imageurl:"",
        selectedImages:[]
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

 handlepropertyBedChange = (event) => {
    this.setState({
        bed: event.target.value
        })
 }

 handlepropertyBathChange = (event) => {
    this.setState({
        bath: event.target.value
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
    console.log(this.state.imageurl);
    this.state.selectedImages.push(this.state.imageurl)
    const {propertyId, propertyName, propertyDesc, propertyType, propertySqftArea, propertyPrice, propertyStreet, 
        propertyCity, propertyState, propertyZipcode, propertyBuildDate, bed, bath, seller, buyer, selectedImages} = this.state;
        console.log('selectedImages', selectedImages)
        // selectedImages= selectedImages.pop();
    fetch('http://localhost:3000/homeSearch/',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({propertyId, propertyName, propertyDesc, propertyType, propertySqftArea, propertyPrice, propertyStreet, 
            propertyCity, propertyState, propertyZipcode, propertyBuildDate, bed, bath, seller, buyer, selectedImages})
    }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
}


handleFileInputChange = async e => {
    
    const files =e.target.files
    const data = new FormData()
    const resultUrls = []

    
    
    
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        this.previewFile(file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "easy_homes");

         fetch (
            'https://api.cloudinary.com/v1_1/sm-entreperises/image/upload', 
            {
                method: 'Post',
                body: formData
            }
         ).then(response => response.json()) 
           .then(newData => {
              const url =newData.url;
              if (url.length!= 0 && url!=="") {
                this.setState({
               
                    selectedImages : [...this.state.selectedImages, url]
                })
              }
          
           console.log(i, url)
           })     
    }
 }

 previewFile = (file) => {
    
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () => {
         
     this.setState({previewSource:reader.result})    
     }
 }

 handleSubmit = (event) => {
     console.log('submitting')
     event.preventDefault()
     this.getData();
     if (!this.state.previewSource) return;
    
     this.setState({uploadImage:this.state.previewSource}) 
 }


render() {
        return(
            <div className = "bkImage">
             <form onSubmit= {this.handleSubmit} className="form">

            <div className= "formContainer">
                
                <div className="lblContainer">
                    <label className="desc">Property Id :</label>
                    <input className= "inputProperty" type='number' min="0" value= {this.state.propertyId} onChange = {this.handlepropertyIdChange}/>
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
                   <select value={this.state.value} onChange={this.handleChange}>
                   <option value="None">None </option>   
                   <option value="Appartment">Appartment </option>
                   <option value="Condos">Condos</option>
                   <option value="Home">Home</option>
                   <option value="Studio">Studio</option>
                   </select>
                </div>
                <div className="lblContainer">
                    <label className="desc">Bed :</label>
                    <input className= "inputProperty" type='number' min="0" value= {this.state.bed} onChange = {this.handlepropertyBedChange}/>
                </div>
                <div className="lblContainer">
                    <label className="desc">Bath :</label>
                    <input className= "inputProperty" type='number' min="0" value= {this.state.bath} onChange = {this.handlepropertyBathChange}/>
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
               


                <input className= "imgUpload" type= "file" name= "file" multiple onChange= {this.handleFileInputChange} />
                <button onClick={this.handleSubmit} className="btnprop" type="submit">Add Property</button>
               
                
                
                </div>
                </form>

                {this.state.selectedImages && this.state.selectedImages.map((per )=> {
                    return(
                        <img  className="br" src={per} alt="chosen" style= {{height: '200px', width: '250px'}} />
                    )
                }) 
            }      
                
            </div>
        )
    }
}

export default Seller; 
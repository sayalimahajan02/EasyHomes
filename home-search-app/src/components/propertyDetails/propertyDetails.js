import React from 'react';
import './propertyDetails.scss';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import Moment from 'moment';



class propertyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyName: "",
      propertyDesc: "",
      propertyType: "",
      propertySqftArea: "",
      propertyPrice: 0,
      propertyStreet: "",
      bed: 0,
      bath: 0,
      selectedImages: [],
      propertyCity: "",
      propertyState: "",
      propertyZipcode: 0,
      propertyBuildDate: "",
      seller: [],
      buyer: [],
      data: [],
      temp: [],
      disableBtn: false,
      btnName: "Start an Offer",
      proceedBtn: false,
      email:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToBuyer = this.addToBuyer.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.loadUserDetails = this.loadUserDetails.bind(this);
  }

  componentDidMount() {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')=='admin'){
      alert('You do not have permission to view this page. Please login with proper user');
      window.location.assign('/');
    }
    this.loadSellerDetails()
    this.getData()
    this.loadUserDetails()
  }

  loadUserDetails() {
    const temp = JSON.parse(localStorage.getItem('user'))
    console.log("heyyy "+temp)
    this.setState({
        email: temp.emailId
    })
}

  loadSellerDetails() {
    const temp = JSON.parse(localStorage.getItem('user'))
    this.setState({
      seller: temp
    })
  }
  //to set state
  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value })
  }

  addToBuyer() {

    if (!this.state.data.buyer) {
      const temp = this.state.data;
      temp.buyer = localStorage.getItem('user');
      this.setState({
        data: temp,
        disableBtn: true
      })
      this.putData(this.state.data, this.state.disableBtn)
    }
    else {
      alert("this property already has a buyer")
    }
  }

  checkUser(){
    if(this.state.email === this.state.data.seller.emailId){
      this.setState({
        disableBtn: true,
        btnName: "You are seller of this property",
      })
    }
  }
  //add new task to list
  addNewTask = () => {
    this.setState({
      showDiv: !this.state.showDiv
    })
  }

  // Get Data 
  getData() {
    const apiUrl = 'http://localhost:3000/homeSearch/' + this.props.location.state.propertyId;
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseList => {
        this.setState({
          data: responseList,
        })
        this.checkUser();
        if (responseList.buyer) {
          this.setState({
            disableBtn: true,
            btnName: "Property Sold",
          })
        }
      })
      .catch(error => {
        console.log("error:" + error)
      });
  }

  //put data
  putData(data) {
    const apiUrl = 'http://localhost:3000/homeSearch/' + this.props.location.state.propertyId;
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buyer: this.state.data.buyer
      })
    }).then(response => {
      console.log("response:" + response.body)
    })
      .catch(error => {
        console.log("error:" + error)
      })
  }

  renderPhotos = (source) => {
    console.log('source: ', source);
    if (source && source.length >= 1) {
      return source.map((photo) => {
        return <img src={photo.blob.slice(5, photo.blob.length)} alt="" />;
      });
    } else {
      return (
        <div>No Images found</div>
      )
    }
  };

  render() {
    return (

      <>
        <div className="prop-container">
          <div className="rowone">
            <div className="column2">
              <div className="propName">{this.state && this.state.data && this.state.data.propertyName}</div>
              <div className="column1">
                <div className="sample-box">{this.state && this.state.data && this.state.data.propertyDesc}</div>
                <div className="prop-add">{this.state && this.state.data && this.state.data.propertyStreet}, {this.state && this.state.data && this.state.data.propertyCity}, {this.state && this.state.data && this.state.data.propertyState} - {this.state && this.state.data && this.state.data.propertyZipcode}</div>
                <div className="prop-price">${this.state && this.state.data && this.state.data.propertyPrice}</div>
              </div>

              <div className="propAmen">
                <pre>   BED  {this.state && this.state.data && this.state.data.bed}      |</pre>
                <pre>   BATH  {this.state && this.state.data && this.state.data.bath}    |</pre>
                <pre>   {this.state && this.state.data && this.state.data.propertySqftArea}  Sqft </pre>
              </div>

              <div className="sample-box">
                <label>Property Type</label>
                <input id="proptype" value={this.state && this.state.data && this.state.data.propertyType} disabled></input><br />
                <label>Property Build Date</label>
                <input id="propdate" value={Moment(this.state && this.state.data && this.state.data.propertyBuildDate).format('MM-DD-YYYY')} disabled></input>
              </div>

              <button className="contact-seller-btn" onClick={this.addNewTask}>Contact Seller</button>

              {this.state.showDiv ? <div>
                <div className="seller-details">
                  <label>Email</label>
                  <input id="email" value={this.state && this.state.data && this.state.data.seller.emailId} disabled></input>
                  <label>Contact</label>
                  <input id="contact" value={this.state.seller.contact} disabled></input>
                </div>
              </div> : null}
              <div className="offer-btn-class">
                <Link to="/payment">
                  <button disabled={this.state && this.state.disableBtn} className="offer-btn" onClick={this.addToBuyer}>{this.state.btnName}</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="rowtwo">
            <AliceCarousel autoPlay autoPlayInterval="2000">{
              this.state.data.selectedImages && this.state.data.selectedImages.slice(0, this.state.data.selectedImages.length - 1).map((e, i) => {
                console.log(e)
                return (
                  <img src={e} className="sliderimg" />

                )
              })
            }
            </AliceCarousel>
          </div>
        </div>
      </>
    )
  }
}

export default propertyDetails;


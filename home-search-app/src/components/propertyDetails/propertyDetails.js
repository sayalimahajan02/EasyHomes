import React from 'react';
import './propertyDetails.scss';
// import img1 from '../images/property.jpeg';
import "react-alice-carousel/lib/scss/alice-carousel.scss";


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
      btnName: "Start an Offer"
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToBuyer = this.addToBuyer.bind(this);
  }


  //to set state
  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value })
  }

  //when page loads
  componentWillMount() {
    this.getData();

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
          //temp: JSON.parse(responseList)
        })
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
        <div class="row">
          <div className="column1">

            <div class="prop-add">{this.state && this.state.data && this.state.data.propertyStreet}, {this.state && this.state.data && this.state.data.propertyCity}, {this.state && this.state.data && this.state.data.propertyState} - {this.state && this.state.data && this.state.data.propertyZipcode}</div>
            <div class="prop-price">${this.state && this.state.data && this.state.data.propertyPrice}</div>
          </div>
          <div class="column2">
            <div>{this.state && this.state.data && this.state.data.propertyName}</div>
            <div className="sample-box">{this.state && this.state.data && this.state.data.propertyDesc}</div>

            <table>
              <tr>
                <th>{this.state && this.state.data && this.state.data.bed}</th>
                <th>{this.state && this.state.data && this.state.data.bath}</th>
                <th>{this.state && this.state.data && this.state.data.propertySqftArea}</th>
              </tr>
              <tr>
                <td>BED</td>
                <td>BATH</td>
                <td>Sqft</td>
              </tr>
            </table>
            <div className="sample-box">
              <label>Property Type</label>
              <input id="proptype" value={this.state && this.state.data && this.state.data.propertyType} disabled></input>
              <label>Property Build Date</label>
              <input id="propdate" value={this.state && this.state.data && this.state.data.propertyBuildDate} disabled></input>
            </div>
            <button className="contact-seller-btn" onClick={this.addNewTask}>Contact Seller</button>

            {this.state.showDiv ? <div>
              <div className="seller-details">
                <label>Email</label>
                <input id="email" value={this.state && this.state.data && this.state.data.seller.emailId} disabled></input>
                <label>Contact</label>
                <input id="contact" value={this.state && this.state.desc} disabled></input>
              </div>
            </div> : null}
            <div className="offer-btn-class"><button disabled={this.state && this.state.disableBtn} className="offer-btn" onClick={this.addToBuyer}>{this.state.btnName}</button></div>
          </div>
        </div>

        <div className="result">
          {
            this.state.data.selectedImages && this.state.data.selectedImages.map((e, i) => {
              console.log(e)
              return (
                <img src={e}></img>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default propertyDetails;


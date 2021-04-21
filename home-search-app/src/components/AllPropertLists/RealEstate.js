import React, { Component } from 'react'
import propertyDetails from '../propertyDetails/propertyDetails';
import Filter from './Filter'
import Listings from './Listings'
import './sass/main.scss';

class RealEstate extends Component {
  constructor() {
    super()
    this.state = {
      listingsData: [],
      filteredData: [],
      sortby: 'price-dsc',
      view: 'long-box',
      search: '',
      city: "All",
      propertyType: "All",
      bed: "Select",
      bath: "Select",
      floorSpace: "0",
      price: "0",
      extras: "",
      min_floor_space: "",
      max_floor_space: ""
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentDidMount() {
    this.getData();
    const listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
  }

  getData() {
    const tmpArray = [];
    fetch('http://localhost:3000/homeSearch/')
      .then(response => response.json())
      .then(response => {
        for (var i = 0; i < response.length; i++) {
          tmpArray.push(response[i])
        }
        this.setState({
          listingsData: tmpArray,
          filteredData: tmpArray
        })
      })
      .catch(error => this.setState({ error }));
  }

  change(event) {
    // console.log("click achieved")
    const name = event.target.name
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    // console.log(name, value)
    // this.setState({
    //   [name]: value
    // }, () => {
    //   this.filteredData()
    // })
    this.setState({
      [name]: value
    })
  }

  // changeId(_id) {
  //   this.setState({
  //     id: _id
  //   })
  // }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    if (this.state.city !== "All") {
      var newData = this.state.listingsData.filter((filterProperty) => {
        console.log('city', newData)
        return filterProperty.propertyCity == this.state.city
      });
      console.log(this.state.propertyType)
      if (this.state.propertyType !== "All") {
        newData = newData.filter((filterProperty) => {

          return filterProperty.propertyType == this.state.propertyType
        })
        console.log('type', newData)
      }
      console.log(this.state.bed)
      if (this.state.bed !== "Select") {
        newData = newData.filter((filterProperty) => {
          console.log('bed', newData)
          return filterProperty.bed == this.state.bed
        })
      }
      console.log(this.state.bath)
      if (this.state.bath !== "Select") {
        console.log('bath', newData)
        newData = newData.filter((filterProperty) => {

          return filterProperty.bath == this.state.bath
        })
      }

      console.log(this.state.min_floor_space, this.state.max_floor_space)
      if (this.state.min_floor_space !== "" && this.state.max_floor_space !== "") {
        console.log('floor', newData)
        newData = newData.filter((filterProperty) => {
          return ((filterProperty.propertySqftArea >= this.state.min_floor_space) && (filterProperty.propertySqftArea <= this.state.max_floor_space))
        })
        console.log(newData)
      }

      // if (this.state.min_price !== "" && this.state.min_price !== "") {
      //   newData = newData.filter((filterProperty) => {
      //     console.log('price', newData)
      //     return this.state.min_price <= filterProperty.propertyPrice && this.state.max_price >= filterProperty.propertyPrice
      //   })
      // }


      this.setState({
        filteredData: newData
      })
      console.log(this.state.filteredData)
    }
    else {
      this.setState({
        filteredData: this.state.listingsData
      })
    }
  }

  render() {

    return (
      <div>
        <section id="content-area">
          <Filter change={this.change} listingsData={this.state.listingsData} filteredData={this.filteredData} />
          <Listings change={this.change} listingsData={this.state.filteredData} globalState={this.state} changeView={this.changeView} />
          {/* <propertyDetails change={this.change} listingsData={this.state.listingsData} changeView={this.changeId} /> */}
        </section>
      </div>
    )
  }
}

export default RealEstate;
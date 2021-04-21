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
    if (localStorage.getItem('username') == null || localStorage.getItem('username') == 'admin') {
      alert('You do not have permission to view this page. Please login with proper user');
      window.location.assign('/');
    }
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
    const name = event.target.name
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    console.log("filter")
    let newData = this.state.listingsData;
    if (this.state.city !== "All") {
      newData = newData.filter((filterProperty) => {

        return filterProperty.propertyCity == this.state.city
      });
    }
    if (this.state.propertyType !== "All") {
      newData = newData.filter((filterProperty) => {

        return filterProperty.propertyType == this.state.propertyType
      })
      console.log('type', newData)
    }
    if (this.state.bed !== "Select") {
      newData = newData.filter((filterProperty) => {
        console.log('bed', newData)
        return filterProperty.bed == this.state.bed
      })
    }
    if (this.state.bath !== "Select") {
      console.log('bath', newData)
      newData = newData.filter((filterProperty) => {

        return filterProperty.bath == this.state.bath
      })
    }
    this.setState({
      filteredData: newData
    })
  }

  render() {

    return (
      <div>
        <section id="content-area">
          <Filter change={this.change} listingsData={this.state.listingsData} filteredData={this.filteredData} />
          <Listings change={this.change} listingsData={this.state.filteredData} globalState={this.state} changeView={this.changeView} />
        </section>
      </div>
    )
  }
}

export default RealEstate;
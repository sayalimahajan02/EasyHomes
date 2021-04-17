import React, { Component } from 'react'
import Filter from './Filter'
import Listings from './Listings'
//import listingsData from './listingsData'
import './sass/main.scss';

class RealEstate extends Component {
  constructor() {
    super()
    this.state = {
      //name: 'Gucci af',
      listingsData: [],
      // city: 'All',
      // propertyType: 'All',
      // bed: 1,
      // bath: 1,
      // min_floor_space: 0,
      // max_floor_space: 150000,
      // min_price: 0,
      // max_price: 10000000,
      // elevator: false,
      // swimming_pool: false,
      // finished_basement: false,
      filteredData: [],
      populateFormsData: [],
      sortby: 'price-dsc',
      view: 'long-box',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    this.getData();
    // Default sort from lowest price to highest price
    const listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    // this.setState({
    //     listingsData
    // })
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
        console.log(this.state.listingsData[0].propertyType);
      })
      .catch(error => this.setState({ error }));
  }

  change(event) {
    const name = event.target.name
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      this.filteredData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    let newData = this.state.listingsData.filter((listing) => {
      return listing.price >= this.state.min_price && listing.price <= this.state.max_price
        && listing.floorSpace >= this.state.min_floor_space && listing.floorSpace <= this.state.max_floor_space
        && listing.bed >= this.state.bed
        && listing.bath >= this.state.bath
    })

    if (this.state.city != "All") {
      newData = newData.filter((listing) => {
        return listing.city === this.state.city
      })
    }

    if (this.state.propertyType != "All") {
      newData = newData.filter((listing) => {
        return listing.propertyType === this.state.propertyType
      })
    }

    if (this.state.sortby != "price-dsc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((listing) => {
        const city = listing.city.toLowerCase()
        const searchText = this.state.search.toLowerCase()
        const search = city.match(searchText)

        if (search != null) {
          return true
        }
      })
    }

    if (this.state.elevator === true) {
      newData = newData.filter((listing) => {
        return listing.extras.elevator === this.state.elevator
      })
    }

    if (this.state.swimming_pool === true) {
      newData = newData.filter((listing) => {
        return listing.extras.swimming_pool === this.state.swimming_pool
      })
    }

    if (this.state.finished_basement === true) {
      newData = newData.filter((listing) => {
        return listing.extras.finished_basement === this.state.finished_basement
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    // city
    let cities = this.state.listingsData.map((listing) => {
      return listing.city
    })
    console.log('Listing:' + this.state.listingsData)
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()
    // property type
    let propertyTypes = this.state.listingsData.map((listing) => {
      return listing.propertyType
    })

    propertyTypes = new Set(propertyTypes)
    propertyTypes = [...propertyTypes]

    propertyTypes = propertyTypes.sort()
    // bed
    let bed = this.state.listingsData.map((listing) => {
      return listing.bed
    })

    bed = new Set(bed)
    bed = [...bed]

    bed = bed.sort()
    // bath
    let bath = this.state.listingsData.map((listing) => {
      return listing.bath
    })

    bath = new Set(bath)
    bath = [...bath]

    bath = bath.sort()

    this.setState({
      populateFormsData: {
        cities,
        propertyTypes,
        bed,
        bath
      }
    })
  }

  render() {
    return (
      <div>
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <Listings change={this.change} listingsData={this.state.filteredData} globalState={this.state} changeView={this.changeView} />
        </section>
      </div>
    )
  }
}

export default RealEstate;
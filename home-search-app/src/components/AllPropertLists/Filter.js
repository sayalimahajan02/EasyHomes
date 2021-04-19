import React, { Component } from 'react'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Joe'
        }
        this.cities = this.cities.bind(this)
        this.propertyTypes = this.propertyTypes.bind(this)
        this.bedrooms = this.bedrooms.bind(this)
        this.bathrooms = this.bathrooms.bind(this)
    }

    cities() {

        let cities = this.props.listingsData.map((listing) => {
            return listing['propertyCity']
        })
        var uniqueCities = Array.from(new Set(cities));
        if (uniqueCities != undefined) {
            return uniqueCities.map((city) => {
                return (
                    <option key={city} value={city}>{city}</option>
                )
            })
        }
    }

    propertyTypes() {
        let propertyTypes = this.props.listingsData.map((listing) => {
            return listing['propertyType']
        })
        var uniqueProperty = Array.from(new Set(propertyTypes));
        if (uniqueProperty != undefined) {
            return uniqueProperty.map((propertyType) => {
                return (
                    <option key={propertyType} value={propertyType}>{propertyType}</option>
                )
            })
        }
    }

    bedrooms() {
        let bed = this.props.listingsData.map((listing) => {
            return listing['bed']
        })
        var uniqueBed = Array.from(new Set(bed));
        if (uniqueBed != undefined) {
            return uniqueBed.map((bed) => {
                return (
                    <option key={bed} value={bed}>{bed}+ BR</option>
                )
            })
        }
    }

    bathrooms() {
        let bath = this.props.listingsData.map((listing) => {
            return listing['bath']
        })
        var uniqueBath = Array.from(new Set(bath));
        if (uniqueBath != undefined) {
            return uniqueBath.map((bath) => {
                return (
                    <option key={bath} value={bath}>{bath}+ BA</option>
                )
            })
        }
    }

    render() {
        return (
            <section id="filter">
                <div className="inside">
                    <h4>Filter</h4>
                    <label htmlFor="city">City</label>
                    <select name="city" className="filters city" onChange={this.props.change}>
                        <option value="All">All</option>
                        {this.cities()}
                    </select>
                    <label htmlFor="propertyType">Type of Property</label>
                    <select name="propertyType" className="filters property-type" onChange={this.props.change}>
                        <option value="All">All</option>
                        {this.propertyTypes()}
                    </select>
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <select name="bedrooms" className="filters number-of-bedrooms" onChange={this.props.change}>
                        <option value="Select">Select</option>
                        {this.bedrooms()}
                    </select>
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <select name="bathrooms" className="filters number-of-bathrooms" onChange={this.props.change}>
                        <option value="Select">Select</option>
                        {this.bathrooms()}
                    </select>

                    <div className="filters floor-space">
                        <span className="title">Floor Space</span>
                        <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.state.min_floor_space} />
                        <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.state.max_floor_space} />
                    </div>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.state.min_price} />
                        <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.state.max_price} />
                    </div>

                    <div className="filters extras">
                        <span className="title">Extras</span>
                        <label htmlFor="extras">
                            <span>Elevator</span>
                            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
                        </label>
                        <label htmlFor="extras">
                            <span>Swimming Pool</span>
                            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
                        </label>
                        <label htmlFor="extras">
                            <span>Finished Basement</span>
                            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change} />
                        </label>
                    </div>
                    <button type="button" onClick={this.props.filteredData}>Filter</button>
                </div>
            </section>
        )
    }
}

export default Filter
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

class Listings extends Component {
  constructor() {
    super()
    this.state = {
      emailId: ""
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {

    const { listingsData } = this.props

    if (listingsData === undefined || listingsData.length === 0) {
      return "No Results"
    }
    // box
    return listingsData.map((listing, index) => {
      var divStyle = {
        backgroundImage: `url(${listing.selectedImages[0]})`
      }
      if (this.props.globalState.view === 'box') {
        return (
          <div className="col-md-3" key={index}>
            <div className="listing">
              <div className="listing-img" style={divStyle}>
                <span className="address">{listing.propertyName}</span>
                <div className="details" >
                  <div className="col-md-3">
                    <div className="user-img"> </div>
                  </div>

                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">{listing.seller.emailId.substring(0, listing.seller.emailId.lastIndexOf('@'))}</span>
                      <span className="post-date">{listing.propertyBuildDate}</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <span>{listing.propertySqftArea} ft&sup2;</span>
                      </div>
                      <div className="bd-ba-icons">
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span>{listing.bed}</span>
                        </div>
                        <div className="bathrooms">
                          <i className="fa fa-bath" aria-hidden="true"></i>
                          <span>{listing.bath}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.propertyPrice}</span>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.propertyCity}, {listing.propertyState}</span>
                {/* <Link to="/propertDetails/" params={{ propertyId: listing.propertyCity }}> */}
                <Link to={{
                  pathname: `/propertyDetails`,
                  state: { propertyId: listing._id }
                }}>
                  <button type="button" className="button-view">View</button>
                </Link>
              </div>

            </div>
          </div>
        )
      } else {
        // long-box
        return (
          <div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">
              <div className="listing-img" style={divStyle}>
                <span className="address">{listing.propertyName}</span>
                <div className="details" >
                  <div className="col-md-3">
                    <div className="user-img"> </div>
                  </div>

                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">{listing.seller.emailId.substring(0, listing.seller.emailId.lastIndexOf('@'))}</span>
                      <span className="post-date">{Moment(listing.propertyBuildDate).format("MM-DD-YYYY")}</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <span>{listing.propertySqftArea} sqft</span>
                      </div>
                      <div className="bd-ba-icons">
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span>Bed</span>
                          <span>{listing.bed}</span>
                        </div>
                        <div className="bathrooms">
                          <i className="fa fa-bath" aria-hidden="true"></i>
                          <span>Bath</span>
                          <span>{listing.bath}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.propertyPrice}</span>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {listing.propertyCity}, {listing.propertyState}</span>
                {/* <Link to="/propertyDetails/" params={{ propertyId: listing._id }}> */}
                <Link to={{
                  pathname: `/propertyDetails`,
                  state: { propertyId: listing._id }
                }}>
                  <button type="button" >View</button>
                </Link>
              </div>

            </div>
          </div>
        )
      }
    })
  }


  render() {
    return (
      <section id="listings">
        <section className="sortby-area">
          <div className="results">{this.props.globalState.filteredData.length} results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long-box")}></i>
              <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          {this.loopListings()}
        </section>
      </section>
    )
  }
}

export default Listings
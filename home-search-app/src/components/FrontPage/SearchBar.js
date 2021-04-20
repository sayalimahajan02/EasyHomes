import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  render() {

    return (
      <form className='search-form' action='/property'>
        <div className='input-wrapper'>
          <input type='text' autoComplete='off' className='search-input' placeholder='Enter an address, neighborhood, city, or ZIP code'
            value={this.state.query} onChange={this.handleChange} />
          <div className='search-btn-container'>
            <button className='search-button'>
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar;
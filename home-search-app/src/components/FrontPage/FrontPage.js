import React from 'react';
import './../FrontPage/FrontPageAndSearch.scss';
import Video1 from './../videos/house1.mp4';
import SearchBar from './../FrontPage/SearchBar';

class FrontPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='display'>
        <div className='front-page-wrapper'>
          <div className='video-wrapper'>
            <video autoPlay muted loop poster='' >
              <source src={Video1} type='video/mp4' />
            </video>
          </div>

          <div className='search-container'>
            <header className='front-page-header'>
              <h1 className='heading'>Find your dream Home today</h1>
            </header>
            <div className='front-page-tabs'>
              <ul>
                <li className='active'>
                  <a href='/property'>Buy</a>
                </li>
                <li className=''>
                  <a href='/seller'>Sell</a>
                </li>
              </ul>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    )
  }
}

export default FrontPage;
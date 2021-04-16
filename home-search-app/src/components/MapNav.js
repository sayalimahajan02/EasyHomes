import React from 'react';
import Map from './Map';
import './MapNav.scss';

class MapNav extends React.Component {

	render() {
		return(
			<div class = "map-details">
				<Map
					google={this.props.google}
					center={{lat: 42.334160, lng: -71.101040}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default MapNav;
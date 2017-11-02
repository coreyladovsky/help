import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import MarkerManager from '../../util/marker_manager';


class BusinessMap extends React.Component {


  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.751300 , lng: -73.983665 },
      zoom: 13
    };

    this.mapNode = document.getElementById('map-container');

     this.map = new google.maps.Map(this.mapNode, mapOptions);
     this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}>
      </div>
    );
  }


}

export default withRouter(BusinessMap);

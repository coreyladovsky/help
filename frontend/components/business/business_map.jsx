import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import MarkerManager from '../../util/marker_manager';


class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
    this.compareValues = this.compareValues.bind(this);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 40.751300 , lng: -73.983665 },
      zoom:13
    };
    this.mapNode = document.getElementById('map-container');
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  compareValues(arg1, arg2) {
    if(arg1 === "false") return true;
    if(arg1 === "true") {
      return true === arg2;
    }
    return parseInt(arg1) >= arg2;
  }

  componentDidUpdate() {
    if(this.props.business.length !== 0) {

      let mapOptions = {
       center: { lat: this.props.business[0].lat , lng: this.props.business[0].lng },
       zoom: 11
       };

      this.mapNode = document.getElementById('map-container');
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);

      let bizzys = [];
      let count = 0;
      for(let i = 0; i < this.props.business.length; i++) {
        if(!this.props.filters) {
          bizzys.push(this.props.props.business[i]);
        }
        else if(Object.keys(this.props.filters).every(filter => this.compareValues(this.props.filters[filter], this.props.business[i][filter]))) {
          bizzys.push(this.props.business[i]);
        }
      }

    this.MarkerManager.updateMarkers(bizzys.slice(0,20));
  } else {
    this.MarkerManager.updateMarkers("clear");
  }

}

  render() {

    return(
      <div id='map-container' ref={ map => this.mapNode = map}>
      </div>
    );
  }


}

export default withRouter(BusinessMap);

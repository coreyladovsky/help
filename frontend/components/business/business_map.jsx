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
    if(this.props.props.business.length !== 0) {

      let mapOptions = {
       center: { lat: this.props.props.business[0].lat , lng: this.props.props.business[0].lng },
       zoom: 11
       };

      this.mapNode = document.getElementById('map-container');

      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);


      let bizzys = [];
      let count = 0;
    for(let i = 0; i < 20 && i < this.props.props.business.length; i++) {
      if(!this.props.props.filters) {
        bizzys.push(this.props.props.business[i]);
      }
      else if(Object.keys(this.props.props.filters).every(filter => this.compareValues(this.props.props.filters[filter], this.props.props.business[i][filter]))) {
        bizzys.push(this.props.props.business[i]);
      }
    }

    this.MarkerManager.updateMarkers(bizzys);
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

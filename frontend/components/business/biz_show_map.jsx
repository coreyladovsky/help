import React from "react";
import { withRouter } from "react-router-dom";
import ReactDom from "react-dom";
import MarkerManager from "../../util/biz_show_marker_manager";

class BizShowMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.business.lat, lng: this.props.business.lng },
      zoom: 15
    };

    this.mapNode = document.getElementById("map-container");
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.business);
  }

  render() {
    return <div id="map-container" ref={map => (this.mapNode = map)} />;
  }
}

export default withRouter(BizShowMap);

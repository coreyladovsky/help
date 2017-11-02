import { Link } from 'react-router-dom';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    const businessesObj ={};
    businesses.forEach(business => {
      if(!Object.keys(this.markers).includes(business.id)) {
        this.createMarkerFromBusiness(business);
      }
    });
  }


  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      content: `${business.image}, ${business.name }, ${business.address}`,
      position,
      map: this.map,
      businessId: business.id,
      animation: google.maps.Animation.DROP
    });
    let img = business.image
    let infowindow =  new google.maps.InfoWindow({
          content: `<IMG BORDER="0"  ALIGN="Left" SRC=${img}> ` + business.name + " " + business.address
        });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });
    // marker.addListener('click', function() {
    //   infowindow.close();
    // });

    this.markers[marker.businessId] = marker;
  }

}

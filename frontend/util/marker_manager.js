

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
      position,
      map: this.map,
      businessId: business.id,
      animation: google.maps.Animation.DROP
    });
    this.markers[marker.businessId] = marker;
  }

}

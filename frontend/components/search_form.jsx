import React from 'react';
import { withRouter } from 'react-router-dom';
// import geocoder from 'geocoder';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {findValue: "", nearValue: "", priceValue: 4, noiseValue:4, delivery: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.findChange = this.findChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.noiseChange = this.noiseChange.bind(this);
    this.deliveryChange = this.deliveryChange.bind(this);
    this.activatePlacesSearch = this.activatePlacesSearch.bind(this);
    this.getLatLng = this.getLatLng.bind(this);
    this.filter = this.filter.bind(this);
    this.autocomplete;

 }

  getLatLng(address) {
    if(address === "") {
      return "";
    }
    let place = this.autocomplete.getPlace();
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();
    return [lat, lng];
  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({nearValue: document.getElementById("autocomplete").value});
    setTimeout(() => {

      this.props.fetchBusinesses({
        name: this.state.findValue,
        cuisine: this.state.findValue.charAt(0).toUpperCase() + this.state.findValue.slice(1),
        price_range: this.state.priceValue,
        noise_level: this.state.noiseValue,
        delivery: this.state.deliveryValue,
        bounds: this.getLatLng(this.state.nearValue)
      });
      if(this.props.match.path !== "/search" ) {
        this.props.history.push("/search");
      }
    }, 10);


  }

   activatePlacesSearch() {
    var input = document.getElementById('autocomplete');
     this.autocomplete = new google.maps.places.Autocomplete(input);

    // console.log(this.state);
  }

  findChange(event) {
    this.setState({findValue: event.target.value});
    this.setState({nearValue: document.getElementById("autocomplete").value})
  }

  nearChange(event) {
    this.setState({nearValue: event.target.value});
    // this.activatePlacesSearch();
  }

  priceChange(event) {
    this.setState({priceRangeValue: event.target.value});
  }

  noiseChange(event) {
    this.setState({noiseLevelValue: event.target.value});
  }

  deliveryChange(event) {
    this.setState({deliveryValue: event.target.value});
  }

  filter() {

  return(
      <div>
        <ul className="price-filter">
          <li>
            <label> $
              <input onChange={this.priceChange}  type="radio" value="1" name="price-range" />
            </label>
          </li>
          <li>
            <label> $$
              <input onChange={this.priceChange}  type="radio" value="2" name="price-range" />
            </label>
          </li>
          <li>
            <label> $$$
              <input onChange={this.priceChange}  type="radio" value="3" name="price-range" />
            </label>
          </li>
          <li>
            <label> $$$$
              <input onChange={this.priceChange}  type="radio" value="4" name="price-range" />
            </label>
          </li>
        </ul>

        <ul>
          <li>
            <label> Quiet
              <input onChange={this.noiseChange}  type="radio" value="1" name="noise-range" />
            </label>
          </li>
          <li>
            <label> Average
              <input onChange={this.noiseChange}  type="radio" value="1" name="noise-range" />
            </label>
          </li>
          <li>
            <label> Loud
              <input onChange={this.noiseChange}  type="radio" value="1" name="noise-range" />
            </label>
          </li>
          <li>
            <label> Very Loud
              <input onChange={this.noiseChange}  type="radio" value="1" name="noise-range" />
            </label>
          </li>
        </ul>

        <ul>
          <li>
            <label> Yes
              <input onChange={this.deliveryChange}  type="radio" value="true" name="delivers" />
            </label>
          </li>
          <li>
            <label> No
              <input onChange={this.deliveryChange}  type="radio" value="false" name="delivers" />
            </label>
          </li>
        </ul>

      </div>
  );
}


  render() {
    // let filteredBusinesses = this.props.businesses.filter(
    //   (business) => {
    //     return business.name.toLowerCase().indexOf(this.state.nearValue.toLowerCase() !== -1);
    //   }
    // )
    // let defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(40.751300 , -73.983665 ),
    //   new google.maps.LatLng(42, -74.5)
    // );
    //
    // let input = document.getElementById("autocomplete");
    // // var options = {
    // //   bounds: defaultBounds,
    // //   types: ["establishment"]
    // // };
    // let autocomplete = new google.maps.places.Autocomplete(input);



    return(
      <form id="search-form" onSubmit={this.handleSubmit} className={this.props.path === "/" ? "landing-form" : "serach-nav"} >
        <ul className={this.props.path === "/" ? "landing-form-ul" :"search-form-nav"}>

          <li className={this.props.path === "/" ? "find-text-land" :"find-text-nav"}>
            Find
          </li>
          <li className={this.props.path === "/" ? "find-input-land" :"find-input-field"}>
            <input className={this.props.path === "/" ? "land-input-find" :"nav-input-find"} onChange={this.findChange} value={this.state.findValue} text="type" placeholder="Restaurants"/>
          </li>
          <li className={this.props.path === "/" ? "land-seperator" : "seperator"}><div className={this.props.path === "/" ? "land-seperator-div" :"seperator-div"}></div></li>
          <li className={this.props.path === "/" ? "near-text-land" :"near-text-nav"}> Near</li>
          <li>
            <input id="autocomplete"
              autoComplete="on"
              onFocus={this.activatePlacesSearch}
              className={this.props.path === "/" ? "near-input-land" :"near-input-nav"}
              onChange={this.nearChange}
              value={this.state.nearValue}
              text="type"
              placeholder="Current Location" />
          </li>
          <li>
            <button type="submit" className={this.props.path === "/" ? "mag-land" :"mag"} onKeyDown={this.handleSubmit} onClick={this.handleSubmit}><i className={this.props.path ==="/" ? "land-icon fa fa-search" : "icon fa fa-search" }></i></button>

          </li>
        </ul>

        {this.props.path === "/" ? "" : this.filter()}
      </form>

    );
  }



}

export default withRouter(SearchForm);

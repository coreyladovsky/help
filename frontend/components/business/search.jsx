import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from './business_map';
import NavBar from '../NavBar';



class Search extends React.Component {
  constructor(props){
    super(props);

  }

  // componentDidMount() {
  //   this.props.fetchBusinesses();
  // }


  render() {

    return(

    <div>
      <NavBar props={this.props}/>

      <ul className="map-and-index-ul">
        <li>
          <BusinessIndex updateBounds={this.props.updateBounds} props={this.props} />

        </li>
        <li className="biz-map-index-page">

        <BusinessMap businesses={this.props.business}/>
      </li>
      </ul>
    </div>
  );
  }
}

export default Search;

import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from './business_map';
import NavBar from '../NavBar';


class Search extends React.Component {



  render() {

    return(

    <div>
      <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>
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

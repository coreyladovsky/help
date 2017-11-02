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
        <BusinessIndex props={this.props} />
        <BusinessMap businesses={this.props.business}/>
      </ul>
    </div>
  );
  }
}

export default Search;

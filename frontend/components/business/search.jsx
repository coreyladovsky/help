import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from './business_map';
import NavBar from '../NavBar';


class Search extends React.Component {



  render() {

    return(

    <div>
      <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>
      <BusinessMap />
      <BusinessIndex props={this.props} />
    </div>
  );
  }
}

export default Search;

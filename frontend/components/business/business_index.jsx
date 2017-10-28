import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBar from '../NavBar';

class BusinessIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBusinesses();
  }


  render() {
    const businesses = this.props.business.map((business, idx) => {
      return <BusinessIndexItem key={business.id} idx={idx} business={business} />;
    });

    return(
      <div>
        <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>
          <ul>
            {businesses}
          </ul>
      </div>
    );
  }
}

export default BusinessIndex;

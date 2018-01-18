import React from 'react';
import BusinessIndexItem from './business_index_item';
import { shuffle } from 'underscore';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.compareValues = this.compareValues.bind(this);
  }

  compareValues(arg1, arg2) {
    if(arg1 === "false") return true;
    if(arg1 === "true") {
      return true === arg2;
    }
    return parseInt(arg1) >= arg2;
  }


  render() {

    let none = <h1 className="no-biz">Sorry No Businesses Found, <br />
        Please Try an Alternative Search <br/>  </h1>  ;

    let count= 0;
    const businesses = this.props.props.business.map((business, idx) => {
      if(!this.props.props.filters) {
        count++;
        if(count <= 20) {
          return <BusinessIndexItem key={business.id} idx={count}
            business={business} fetchBusinesses={this.props.props.fetchBusinesses}
            clearFilter={this.props.props.clearFilter} nextPage={this.props.props.nextPage} />;
        }
      } else if(Object.keys(this.props.props.filters).every(filter =>
          this.compareValues(this.props.props.filters[filter], business[filter])
     )) {
        count++;
        if(count <= 20) {
          return <BusinessIndexItem key={business.id} idx={count}
            business={business} fetchBusinesses={this.props.props.fetchBusinesses}
            clearFilter={this.props.props.clearFilter} nextPage={this.props.props.nextPage} />;
        }
      }

    });

    return(
      <div>

          <ul className="biz-item">
            {businesses.length > 0 ? businesses :  none}
          </ul>
      </div>
    );
  }
}

export default BusinessIndex;

import React from 'react';
import BusinessIndexItem from './business_index_item';


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
    let count= 0;
    const businesses = this.props.props.business.map((business, idx) => {
      if(!this.props.props.filters) {
        count++;
        return <BusinessIndexItem key={business.id} idx={count} business={business} fetchBusinesses={this.props.props.fetchBusinesses} nextPage={this.props.props.nextPage} />;
      } else if(Object.keys(this.props.props.filters).every(filter =>
        // {
        // debugger
        //   if (this.props.props.filters[filter] === "true") {
        //     // this.props.props.filters[filter] = 0;
        //   } else if(this.props.props.filters[filter] === "false") {
        //     // this.props.props.filters[filter] = 1;
        //   } else {
        //     parseInt(this.props.props.filters[filter]) >= business[filter];
        //   }
          // parseInt(this.props.props.filters[filter]) >= business[filter]

          this.compareValues(this.props.props.filters[filter], business[filter])

       // }
     )) {
        count++;
        return <BusinessIndexItem key={business.id} idx={count} business={business} fetchBusinesses={this.props.props.fetchBusinesses} nextPage={this.props.props.nextPage} />;
      }

    });

    return(
      <div>

          <ul className="biz-item">
            {businesses}
          </ul>
      </div>
    );
  }
}

export default BusinessIndex;

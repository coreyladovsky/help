import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.props.fetchBusinesses();
  }


  render() {
    const businesses = this.props.props.business.map((business, idx) => {
      return <BusinessIndexItem key={business.id} idx={idx} business={business} />;
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

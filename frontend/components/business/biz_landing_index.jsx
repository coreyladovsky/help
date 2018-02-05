import React from "react";
import BizLandingIndexItem from "./biz_landing_index_item";
import { shuffle } from "underscore";

class BizLandingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const businesses = this.props.business.slice(0, 6).map(business => {
      return <BizLandingIndexItem business={business} key={business.id} />;
    });
    return (
      <div className="biz-landing-index-container">
        <ul className="biz-landing-index-ul">{businesses}</ul>
      </div>
    );
  }
}

export default BizLandingIndex;

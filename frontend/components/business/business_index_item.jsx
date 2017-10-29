import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {

  render() {
  return(
    <div>
      <ul>
        <li>
          <Link to={ `/businesses/${this.props.business.id}`}><img className="business-photo" src={this.props.business.image} /></Link>
        </li>
        <li>
          {this.props.idx + 1}
        </li>
        <li>
          <Link to={'/businesses/${this.props.business.id}'}>{this.props.business.name}</Link>
        </li>
        <li>{this.props.business.address}</li>
        <li>{this.props.business.phone_number}</li>
    </ul>
    {this.props.business.cuisine}
    </div>
  );
  }
}

export default BusinessIndexItem;

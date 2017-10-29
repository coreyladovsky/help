import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import parser from 'parse-address';

class BusinessIndexItem extends React.Component {

  render() {
    let parsed = parser.parseLocation(this.props.business.address);
  return(
    <div>
      <ul className="list-item">
        <li className="biz-photo-li">
          <Link to={ `/businesses/${this.props.business.id}`}><img className="business-photo" src={this.props.business.image} /></Link>
        </li>

        <li className="after-biz-photo">
          <ul className="index-and-name">

            <li>
              {this.props.idx + 1 + "."}
            </li>
            <li className="biz-name-link">
              <Link to={'/businesses/${this.props.business.id}'}>{this.props.business.name}</Link>
            </li>

          </ul>
          <li>  {this.props.business.cuisine}</li>

      </li>
      <li>
          <ul className="business-info">
            <li>{parsed.zip}</li>
            <li>{this.props.business.phone_number}</li>
          </ul>
      </li>
    </ul>

    </div>
  );
  }
}

export default BusinessIndexItem;

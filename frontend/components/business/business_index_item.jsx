import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import parser from 'parse-address';

class BusinessIndexItem extends React.Component {

  render() {
    let parsed = parser.parseLocation(this.props.business.address);
  return(
    <div className="main-div">
      <ul className="holding-box">
        <li className="biz-content" >
    <div className="all-biz">
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
              <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            </li>

          </ul>
          <ul className="rating-bar-line">
            <li>Rating</li>
            <li>#</li>
            <li>reviews</li>
          </ul>
          <ul className="price-cuisine">
            <li>price</li>
            <li ><div className="period-container"><div className="period">·</div></div> </li>
            <li className="cuisine">
                <Link to={'/search'}>{this.props.business.cuisine}</Link>

            </li>
          </ul>


      </li>
    </ul>
      <div className="biz-info-div">
          <ul className="business-info">
            <li>{(parsed.number + " " + parsed.prefix + " " + parsed.street + " " + parsed.type).replace("undefined", "")}</li>
            <li>{(parsed.city + " " + parsed.state + " " + parsed.zip).replace("undefined", "")}</li>
            <li>{this.props.business.phone_number}</li>
          </ul>
      </div>

    </div>
    </li>
    <li className="map">

    </li>
  </ul>
  </div>
  );
  }
}

export default BusinessIndexItem;

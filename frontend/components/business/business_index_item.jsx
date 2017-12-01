import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import parser from 'parse-address';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.findRating = this.findRating.bind(this);
    this.priceRange = this.priceRange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  handleClick(event) {
    this.props.nextPage(`/businesses/${this.props.business.id}/reviews/new`);
  }

  priceRange(avg) {
    switch (avg) {
      case 1:
        return "$" ;
      case 2:
        return "$$" ;
      case 3:
        return "$$$" ;
      case 4:
        return "$$$$" ;
      default:
      return <div className="price-range-undefined">Prices Unknown</div>;
    }
  }

  findRating(rating) {
    switch(rating) {
      case 5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/5_star.png"} />;
      case 4.5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/4_5_star.png"} />;
      case 4:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/4_star.png"} /> ;
      case 3.5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/3_5_star.png"} /> ;
      case 3:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/3_star.png"} /> ;
      case 2.5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/2_5_star.png"} /> ;
      case 2:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/2_star.png"} /> ;
      case 1.5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/1_5_star.png"} /> ;
      case 1:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/1_star.png"} /> ;
      default:
        return   <div className="write-review-index-item"><Link to={"businesses/" + this.props.business.id + "/reviews/new"} onClick={this.handleClick} className ="write-the-first"> Write The First Review!</Link></div>;
    }
  }

  searchSubmit() {
    this.props.clearFilter();
    this.props.fetchBusinesses({cuisine: this.props.business.cuisine.toLowerCase(),
      bounds: "",
      name: this.props.business.cuisine.toLowerCase()});

  }

  render() {

    let parsed = parser.parseLocation(this.props.business.address);
  return(
    <div className="biz-idx-page">
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
              {this.props.idx + "."}
            </li>
            <li className="biz-name-link">
              <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
            </li>

          </ul>
          <ul className="rating-bar-line">
            <li>{this.findRating(this.props.business.average_rating)}</li>
            <li className="biz-review-count-index">{this.props.business.review_count}</li>
            <li className="biz-review-text-index">{this.props.business.review_count === 1 ? '   review' : '   reviews' }</li>
          </ul>
          <ul className="price-cuisine">
            <li>{this.priceRange(this.props.business.price_range)}</li>
            <li ><div className="period-container"><div className="period">·</div></div> </li>
            <li className="cuisine">
                <button onClick={this.searchSubmit}>{this.props.business.cuisine}</button>

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
  </div>
  );
  }
}

export default BusinessIndexItem;

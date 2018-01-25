import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import parser from 'parse-address';


class BizLandingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.findRating = this.findRating.bind(this);
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

  render() {

    let parsed_address = parser.parseLocation(this.props.business.address);
    return(

    <li className="biz-landing-li-item">
      <Link to={`/businesses/${this.props.business.id}`}>
        <img className="biz-landing-photo" src={this.props.business.image_medium}/>
      </Link>

      <Link to={`/businesses/${this.props.business.id}`} className="biz-landing-index-name">
        {this.props.business.name}
      </Link>

      <ul className="rating-bar-line">
        <li>{this.findRating(this.props.business.average_rating)}</li>
        <li className="biz-review-count-index">{this.props.business.review_count}</li>
        <li className="biz-review-text-index">{this.props.business.review_count === 1 ? '   review' : '   reviews' }</li>
      </ul>
      <div className="biz-landing-info">
        <div>{this.props.business.cuisine}</div>
        <div className="address-landing">{parsed_address.city + ", " + parsed_address.state}</div>
      </div>
    </li>
    );
  }

}

export default BizLandingIndexItem;

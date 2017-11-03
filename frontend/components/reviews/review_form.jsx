import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'parse-address';
import NavBar from '../NavBar';
import ReviewsContainer from './reviews_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyValue: this.props.review.body,
      ratingValue: this.props.review.rating,
      priceRangeValue: this.props.review.price_range,
      noiseLevelValue: this.props.review.noise_level,
      deliveryValue: `${this.props.review.delivery}`,
      selected: this.props.review.rating
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.noiseChange = this.noiseChange.bind(this);
    this.deliveryChange = this.deliveryChange.bind(this);
    this.checkedCheck = this.checkedCheck.bind(this);
    this.updateRating = this.updateRating.bind(this);
    // this.starVal = this.starVal.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.formType === "new") {
      this.props.createReview({
        body: this.state.bodyValue,
        rating: this.state.ratingValue,
        price_range: this.state.priceRangeValue,
        noise_level: this.state.noiseLevelValue,
        delivery: this.state.deliveryValue,
        business_id: this.props.match.params.businessId,
        user_id: this.props.currentUser.id
      }).then(()=> this.props.history.push(`/businesses/${this.props.match.params.businessId}`));



    } else {
      this.props.updateReview({
        body: this.state.bodyValue,
        rating: this.state.ratingValue,
        price_range: this.state.priceRangeValue,
        noise_level: this.state.noiseLevelValue,
        delivery: this.state.deliveryValue,
        business_id: this.props.match.params.businessId,
        user_id: this.props.currentUser.id,
        id: this.props.review.id
      }).then(()=> this.props.history.push(`/businesses/${this.props.match.params.businessId}`));;
    }
  }
    //not using this at the moment
  checkedCheck(arg1, arg2) {
    if(arg1 === arg2) {
      return "checked";
    }
  }

  bodyChange(event) {
    this.setState({bodyValue: event.target.value});
  }

  ratingChange(event) {
    this.setState({ratingValue: event.target.value});
  }

  priceChange(event) {
    this.setState({priceRangeValue: event.target.value});
  }

  noiseChange(event) {
    this.setState({noiseLevelValue: event.target.value});
  }

  deliveryChange(event) {
    this.setState({deliveryValue: event.target.value});
  }


  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    if(this.props.formType === 'edit') {
      this.props.fetchReview(this.props.review.id);
    }
  }

  updateRating(event) {
    event.preventDefault();
    this.setState({ratingValue: event.currentTarget.value});
  }


  render() {
    if(this.props.business === undefined) {
      return null;
    } else {
      let starVal = this.state.starVal;
      // switch (starVal) {
      //   case starVal >= 5 :
      //     starfive = "five";
      //   case starVal >= 4 ;
      //     starfour
      // }
      let parsed = parser.parseLocation(this.props.business.address);
    return(
      <div>
        <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>
        <div className="main-container-review-form">


          <ul className="review-container-write-and-show">
            <li className="write-a-review-form">
              <div className="write-review-text-form">Write a Review</div>
                <div className="biz-info-div">
                  <li className="biz-photo-li">
                    <Link to={ `/businesses/${this.props.business.id}`}><img className="business-photo-review-form" src={this.props.business.image} /></Link>
                  </li>
                  <ul className="business-info">
                  <li className="biz-name-link">
                    <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>

                  </li>
                  <li className="cuisine-link-review-form"><Link to={"/search"}>{this.props.business.cuisine}</Link></li>
                      <li className="biz-address-review-forms">{(parsed.number + " " + parsed.prefix + " " + parsed.street + " " + parsed.type).replace("undefined", "")}</li>
                      <li className="biz-address-review-forms">{(parsed.city + ", " + parsed.state + " " + parsed.zip).replace("undefined", "")}</li>
                    </ul>
                </div>
                <form  onSubmit={this.handleSubmit}>
                  <div className="your-review-text">Your review</div>
                  <div className= "stars-and-review-body">
                    <div className="stars-review-biz-form" value={this.state.ratingValue}>
                      <ul className="stars-ratings-form" >
                        <button className="default five " value="5" onClick={this.updateRating}>
                          <li  className="default" >
                          <i className="fa fa-star" aria-hidden="true"  >    </i>
                        </li>
                      </button>
                        <button className="default four five" value="4" onClick={this.updateRating}>
                          <li  className="default" >
                          <i className="fa fa-star" aria-hidden="true"  >    </i>
                        </li>
                      </button>
                        <button className="default three four five" value="3" onClick={this.updateRating}>
                          <li  className="default" >
                          <i className="fa fa-star" aria-hidden="true"  >    </i>
                        </li>
                      </button>
                        <button className="default two three four five" value="2" onClick={this.updateRating}>
                          <li  className="default" >
                          <i className="fa fa-star" aria-hidden="true"  >    </i>
                        </li>
                      </button>
                        <button className="default one two three four five" value="1" onClick={this.updateRating}>
                          <li  className="default" >
                          <i className="fa fa-star" aria-hidden="true"  >    </i>
                        </li>
                      </button>

                      </ul>
                    </div>

                    <textarea onChange={this.bodyChange} value={this.state.bodyValue}></textarea>
                  </div>



                <div>Additional Survery Info</div>
                <ul>
                  <li>Price Range</li>
                  <li> <label> $ <input onChange={this.priceChange}  type="radio" value="1" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 1 ? "checked" : ""}/> </label> </li>
                <li> <label>$$ <input onChange={this.priceChange}  type="radio" value="2" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 2 ? "checked" : ""}/> </label> </li>
              <li> <label>$$$ <input onChange={this.priceChange}  type="radio" value="3" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 3 ? "checked" : ""}/> </label> </li>
            <li> <label>$$$$ <input onChange={this.priceChange}  type="radio" value="4" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 4 ? "checked" : ""}/> </label> </li>
                </ul>


                <div className="delivery-review" onChange={this.deliveryChange}>
                  <ul>
                    <li>Delivers?</li>
                  <label>True<li> <input type="radio" name="boolean-radio" value="true" checked={this.state.deliveryValue === "true" ? "checked" : ""}/></li></label>
                    <label>False<li><input type="radio" name="boolean-radio" value="false" checked={this.state.deliveryValue === "false" ? "checked" : ""}/></li></label>
                  </ul>
                </div>

                <label>Noise Level
                <div className="noise-level-div" onChange={this.noiseChange} value={this.state.noiseLevelValue}>
                  <label>Quiet <input name="noise-radio" type="radio" value="1" checked={parseInt(this.state.noiseLevelValue) === 1 ? "checked" : ""}/></label>
                  <label>Average <input name="noise-radio" type="radio" value="2" checked={parseInt(this.state.noiseLevelValue) === 2 ? "checked" : ""}/></label>
                  <label>Loud<input name="noise-radio" type="radio" value="3" checked={parseInt(this.state.noiseLevelValue) === 3 ? "checked" : ""}/></label>
                  <label>Very Loud<input name="noise-radio" type="radio" value="4" checked={parseInt(this.state.noiseLevelValue) === 4 ? "checked" : ""}/></label>


                </div>
              </label>

                  <button>Post Review</button>
                </form>
            </li>
            <li>
              <ReviewsContainer/>
            </li>
        </ul>
        </div>
        </div>
      );
    }
  }





}

export default ReviewForm;

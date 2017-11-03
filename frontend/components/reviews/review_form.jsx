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
      classColor: "default"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.noiseChange = this.noiseChange.bind(this);
    this.deliveryChange = this.deliveryChange.bind(this);
    this.checkedCheck = this.checkedCheck.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.clearState = this.clearState.bind(this);
    this.updateClass = this.updateClass.bind(this);
    // this.starVal = this.starVal.bind(this);

  }

  clearState() {
    this.setState({
      bodyValue: "",
      ratingValue: "",
      priceRangeValue: "",
      noiseLevelValue: "",
      deliveryValue: "",
    });

  }

  componentWillReceiveProps(nextprops) {
    if(this.props.formType !== nextprops.formType){
      this.props.clearErrors();
      this.clearState();
    }
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
      }).then(()=> this.props.history.push(`/businesses/${this.props.match.params.businessId}`));
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

  updateClass(event) {
    event.preventDefault();
    this.setState({classColor: "color" + event.currentTarget.value});
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

      const errs = this.props.errors.map((err, idx) => {
        return (<li key={idx} className="session-error">{err}</li>);
      });
    return(
      <div>
        <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>
        <div className="main-div-form">
        <ul className="other-reviews">
        <li>
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
                        <li>
                          <input type="radio" value="1" name="star-scale" onClick={this.ratingChange} checked={parseInt(this.state.ratingValue) === 1 ? "checked" : ""}/>
                          <ul>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input type="radio" value="2" name="star-scale" onClick={this.ratingChange} checked={parseInt(this.state.ratingValue) === 2 ? "checked" : ""} />
                          <ul>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input type="radio" value="3" name="star-scale" onClick={this.ratingChange} checked={parseInt(this.state.ratingValue) === 3 ? "checked" : ""}/>
                          <ul>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input type="radio" value="4" name="star-scale" onClick={this.ratingChange} checked={parseInt(this.state.ratingValue) === 4 ? "checked" : ""}/>
                          <ul>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <input type="radio" value="5" name="star-scale" onClick={this.ratingChange} checked={parseInt(this.state.ratingValue) === 5 ? "checked" : ""}/>
                          <ul>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                            <li>
                              <i className="fa fa-star real-star" aria-hidden="true"  >    </i>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </div>

                    <textarea className="text-review-form" placeholder="Your review helps others learn about great businesses." onChange={this.bodyChange} value={this.state.bodyValue}></textarea>
                  </div>



                <div className="add-info-form">Additional Survery Info (Optional)</div>
                <div className="price-range-form">Price Range
                <ul className="price-list-form">
                  <li>   <input onChange={this.priceChange}  type="radio" value="1" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 1 ? "checked" : ""}/>  </li> $
                <li>  <input onChange={this.priceChange}  type="radio" value="2" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 2 ? "checked" : ""}/> </li>$$
              <li> <input onChange={this.priceChange}  type="radio" value="3" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 3 ? "checked" : ""}/> </li>$$$
            <li>  <input onChange={this.priceChange}  type="radio" value="4" name="price-radion" checked={parseInt(this.state.priceRangeValue) === 4 ? "checked" : ""}/> </li>$$$$
                </ul>
              </div>


                <div className="delivery-review" onChange={this.deliveryChange}>
                  <div className="delivery-form">Delivers?</div>
                  <ul  className="price-list-form">
                  <li> <input type="radio" name="boolean-radio" value="true" checked={this.state.deliveryValue === "true" ? "checked" : ""}/></li>Yes
                    <li><input type="radio" name="boolean-radio" value="false" checked={this.state.deliveryValue === "false" ? "checked" : ""}/></li>No
                  </ul>
                </div>


                <div className="noise-level-div" onChange={this.noiseChange} value={this.state.noiseLevelValue}>
                  <div className="price-range-form">Noise Level
                    <ul className="price-list-form">

                      <li> <input name="noise-radio" type="radio" value="1" checked={parseInt(this.state.noiseLevelValue) === 1 ? "checked" : ""}/></li>Quiet
                      <li> <input name="noise-radio" type="radio" value="2" checked={parseInt(this.state.noiseLevelValue) === 2 ? "checked" : ""}/></li>Average
                      <li><input name="noise-radio" type="radio" value="3" checked={parseInt(this.state.noiseLevelValue) === 3 ? "checked" : ""}/></li>Loud
                      <li><input name="noise-radio" type="radio" value="4" checked={parseInt(this.state.noiseLevelValue) === 4 ? "checked" : ""}/></li>Very Loud
                  </ul>
                </div>


                </div>

                <ul className="review-outs">

                  <button className="post-review-button">Post Review</button>
                  <Link className="cancel-review" to={`/businesses/${this.props.match.params.businessId}`}>Cancel</Link>
                </ul>
                </form>
            </li>

            <ul className="session-errors">
              {errs}
            </ul>
        </ul>
        </div>
      </li>
        <li>

      </li>
    </ul>
    </div>
        </div>
      );
    }
  }





}

export default ReviewForm;

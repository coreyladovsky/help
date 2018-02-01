import React from 'react';
import PhotoIndexItem from './photo_index_item';
import NavBarContainer from '../NavBar/NavBar_container';
import { Link, Route } from 'react-router-dom';
import photoShowContainer from './photo_show_container';


class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.enlargeFirst = this.enlargeFirst.bind(this);
    this.enlargeLast = this.enlargeLast.bind(this);
    this.resetPhotos = this.resetPhotos.bind(this);
    this.allPhotos = this.allPhotos.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.findRating = this.findRating.bind(this);

  }

  componentDidMount() {
    if(this.props.photos.length > 0 && this.props.match.path === "/businesses/:businessId") {
      this.resetPhotos();
      this.props.fetchBusiness(this.props.match.params.businessId).then(this.resetPhotos);
    }else if(this.props.match.path === "/businesses/:businessId/photos") {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }

  }



  enlargeFirst() {
    document.getElementById("first_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  resetPhotos() {
    document.getElementById("first_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("third_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  enlargeLast() {
    document.getElementById("third_photo").style.cssText = "transform: scale(1.1) perspective(1px); z-index: 1; transition-duration: 0.2s"
    document.getElementById("second_photo").style.cssText = "transform: scale(1) perspective(1px); z-index: 0; transition-duration: 0.2s"
  }

  allPhotos() {
     this.props.history.push(`/businesses/${this.props.businessId}/photos`);
  }

  clickHandler(event) {
    this.props.nextPage(`${this.props.location.pathname}/new`);
  }

  findRating(rating) {
    switch(rating) {
      case 5:
        return <img className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/5_star.png"} />;
      case 4.5:
        return <img src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/4_5_star.png"} />;
      case 4:
        return <img className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/4_star.png"} /> ;
      case 3.5:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/3_5_star.png"} /> ;
      case 3:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/3_star.png"} /> ;
      case 2.5:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/2_5_star.png"} /> ;
      case 2:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/2_star.png"} /> ;
      case 1.5:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/1_5_star.png"} /> ;
      case 1:
        return <img  className="photo-index-rating" src={"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/show-ratings/1_star.png"} /> ;
      default:
        return   <div ><Link to={"businesses/" + this.props.business.id + "/reviews/new"} onClick={this.handleClick} className ="write-the-first"> Write The First Review!</Link></div>;
    }
  }




  render() {
    if(this.props.photos.length === 0) {
      return null;
    } else if (this.props.match.path === "/businesses/:businessId") {
      return(
          <ul className="photo-items-ul" onClick={this.allPhotos} onLoad={this.resetPhotos}>
            <li>
              <img id="first_photo" onMouseOver={this.enlargeFirst}
              onMouseOut={this.resetPhotos} className="biz-indiv-photo"
              src={this.props.photos[0].image}/>
            </li>
            <li>
              <img id="second_photo" src={this.props.photos[1].image}
                className="biz-indiv-photo"/>
            </li>
            <li>
              <img id="third_photo" onMouseOver={this.enlargeLast}
              onMouseOut={this.resetPhotos} className="biz-indiv-photo"
              src={this.props.photos[this.props.photos.length - 1].image}/>
            </li>
          </ul>
      );
    } else {

      const photos = this.props.photos.map((photo) => {
        return <PhotoIndexItem key={photo.id} photo={photo} />;
      });


      return (
        <div id="photo-page-container">
          <NavBarContainer/>
          <Route path="/businesses/:businessId/photos/:photoId" component={photoShowContainer}/>
          <div className="container-photo-index">


          <div className="main-photo-index">
                <ul className="title-biz-index">
                  <li>Photos for </li>
                  <li>  {this.props.business.name}</li>
                </ul>

                <ul className="photo-index-header-container">
                  <div>
                    <ul className="biz-info-photo-index">
                      <li>
                        <img className="biz-image-photo-index" src={this.props.business.image} />
                      </li>

                      <li>
                        <ul>
                          <li className="biz-name-link-photos">
                            <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
                          </li>

                          <li>
                            <ul className="rating-and-reviews-photo-index">
                              <li>{this.findRating(this.props.business.average_rating)}</li>
                              <li className="biz-review-count-photos">{this.props.business.review_count}</li>
                              <li className="biz-review-text-photos">{this.props.business.review_count === 1 ? '   review' : '   reviews' }</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                    </ul>
                </div>

                  <div className="add-photo-photos">
                    <Link to={this.props.location.pathname +'/new'}
                      className="photo-button-photos"
                      onClick={this.clickHandler}>
                      <i className="fa fa-camera camera-photos" aria-hidden="true">
                      </i>Add photos
                    </Link>

                  </div>

                </ul>



            <ul className="photo-index-ul">
              {photos}
            </ul>
          </div>
        </div>
        </div>
      );
    }

  }

}


export default PhotoIndex;

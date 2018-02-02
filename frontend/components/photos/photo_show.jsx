import React from "react";
import { Link } from "react-router-dom";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.pageReturn = this.pageReturn.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.lastPhoto = this.lastPhoto.bind(this);
  }

  componentDidMount() {
    document.querySelector("html").setAttribute("style", "overflow: hidden;");
    // debugger
    // this.props.fetchPhoto()
  }

  componentWillUnmount() {
    document.querySelector("html").setAttribute("style", "overflow: auto;");
  }

  nextPhoto() {
    let next = (this.props.photoNumber + 1) % this.props.photos.length;
    this.props.history.push(
      "/businesses/" + this.props.match.params.businessId + "/photos/" + this.props.photos[next].id
    );
  }

  lastPhoto() {

    let last = this.props.photoNumber - 1;
    if(last < 0) {
      last = last + this.props.photos.length;
    }
    this.props.history.push(
      "/businesses/" + this.props.match.params.businessId + "/photos/" + this.props.photos[last].id
    );
  }

  pageReturn(e) {
    if(e._targetInst.memoizedProps.value) {
      this.props.history.push(
        "/businesses/" + this.props.match.params.businessId + "/photos"
      );
    }
  }

  render() {
    if(this.props.photo === undefined) {
      return null ;
    } else {

      return (
        <div className="photo-modal" value="exit" onClick={this.pageReturn}>
          <div className="photo-content">
            <div className="left-scroll" onClick={this.lastPhoto}><i className="far fa fa-angle-left angles"></i></div>
            <div className="photo-of-photo-show" >
              <img className="photo-image-show" src={this.props.photo.image_medium} />
            </div>
            <div className="right-scroll" onClick={this.nextPhoto}><i className="far fa fa-angle-right angles"></i></div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoShow;

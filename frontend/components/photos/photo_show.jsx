import React from "react";
import { Link } from "react-router-dom";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.pageReturn = this.pageReturn.bind(this);
  }

  componentDidMount() {
    document.querySelector("html").setAttribute("style", "overflow: hidden;");
    // debugger
    // this.props.fetchPhoto()
  }

  componentWillUnmount() {
    document.querySelector("html").setAttribute("style", "overflow: auto;");
  }

  pageReturn() {
    this.props.history.push(
      "/businesses/" + this.props.match.params.businessId + "/photos"
    );
  }

  render() {
    if(this.props.photo === undefined) {
      debugger
      return null ;
    } else {

      return (
        <div className="photo-modal" onClick={this.pageReturn}>
          <div className="photo-content">
            <div className="photo-of-photo-show" />
              <img src={this.props.photo.image} />
            <div />
          </div>
        </div>
      );
    }
  }
}

export default PhotoShow;

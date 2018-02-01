import React from "react";
import { Link } from "react-router-dom";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.pageReturn = this.pageReturn.bind(this);
  }

  componentDidMount() {
    document.querySelector("html").setAttribute("style", "overflow: hidden;");
  }

  componentWillUnmount() {
    document.querySelector("html").setAttribute("style", "overflow: auto;");
  }

  pageReturn() {
    this.props.history.push(
      "/businesses/" + this.props.match.params.businessId + "/photos/"
    );
  }

  render() {
    return (
      <div className="photo-modal" onClick={this.pageReturn}>
        <div className="photo-content">
          <div className="photo-of-photo-show" />
          <div />
        </div>
      </div>
    );
  }
}

export default PhotoShow;

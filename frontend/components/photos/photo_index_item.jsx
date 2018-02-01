import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.photoLink = this.photoLink.bind(this);
  }

  photoLink() {
    this.props.history.push(this.props.path + this.props.photo.id);
  }

  render() {
    if(this.props.photo === undefined) {
      return null;
    } else {
      return(

        <li className="index-li" onClick={this.photoLink}>
          <img className="index-image" src={this.props.photo.image}/>
        </li>
    );}
  }
}

export default PhotoIndexItem;

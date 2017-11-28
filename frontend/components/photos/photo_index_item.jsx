import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <img src={this.props.photo.image}/>
      </li>
    );
  }
}

export default PhotoIndexItem;

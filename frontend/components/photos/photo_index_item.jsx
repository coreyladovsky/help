import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img className="biz-indiv-photo"src={this.props.photo.image_medium}/>
      </div>
    );
  }
}

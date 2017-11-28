import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.photos.length === 0) {
      return null;
    } else {
      const photos = this.props.photos.map((photo) => {
        return <PhotoIndexItem key={photo.id} bizId={this.props.businessId} photo={photo} />;
      });

      return(

          <ul className="photo-items-ul">
            <li><img className="biz-indiv-photo" src={this.props.photos[0].image}/></li>
            <li><img src={this.props.photos[1].image}/></li>
            <li><img className="biz-indiv-photo"  src={this.props.photos[this.props.photos.length - 1].image}/></li>
          </ul>

      );
    }
  }

}


export default PhotoIndex;

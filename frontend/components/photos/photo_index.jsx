import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.photos === undefined) {
      return null;
    } else {
      const photos = this.props.photos.map((photo) => {
        return <PhotoIndexItem key={photo.id} bizId={this.props.businessId} photo={photo} />;
      });

      return(
        <div>
          <ul className="photo-items-ul">
            {photos}
          </ul>
        </div>
      );
    }
  }
}

export default PhotoIndex;

import { connect } from 'react-redux';
import { fetchPhoto, fetchBizPhotos } from '../../actions/photo_actions';
import { fetchBusiness } from '../../actions/business_actions';
import PhotoShow from './photo_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  let photoNumber;
  let photo;
  let photoId = parseInt(ownProps.match.params.photoId);
  let photos = Object.values(state.photos)
  for(let i = 0; i < photos.length; i++) {
    if(photos[i].id === photoId) {
      photo = photos[i];
      photoNumber = i;
      break;
    }
  }

  return({
    photos,
    businessId: ownProps.match.params.businessId,
    currentUser: state.session.currentUser,
    business: state.business[ownProps.match.params.businessId],
    photo,
    photoNumber,
    photoId

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchBizPhotos: (businessId) => dispatch(fetchBizPhotos(businessId)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow));

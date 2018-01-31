import { connect } from 'react-redux';
import { fetchPhoto, fetchBizPhotos } from '../../actions/photo_actions';
import { fetchBusiness } from '../../actions/business_actions';
import PhotoShow from './photo_show';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {

  return({
    photos: Object.values(state.photos),
    businessId: ownProps.match.params.businessId,
    currentUser: state.session.currentUser,
    business: state.business[ownProps.match.params.businessId],
    photoId: state.photos[ownProps.match.params.photoId]

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

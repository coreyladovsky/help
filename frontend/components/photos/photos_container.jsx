import { connect } from 'react-redux';
import { fetchPhoto, fetchBizPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return({
    photos: Object.values(state.photos),
    businessId: ownProps.businessId,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchBizPhotos: (businessId) => dispatch(fetchBizPhotos(businessId))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));

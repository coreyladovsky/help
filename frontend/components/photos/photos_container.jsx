import { connect } from 'react-redux';
import { fetchPhoto, fetchBizPhotos } from '../../actions/photo_actions';
import { fetchBusiness } from '../../actions/business_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';
import { logout, clearPage, nextPage } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  
  return({
    photos: Object.values(state.photos),
    businessId: ownProps.match.params.businessId,
    currentUser: state.session.currentUser,
    business: state.business[ownProps.match.params.businessId],

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchBizPhotos: (businessId) => dispatch(fetchBizPhotos(businessId)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));

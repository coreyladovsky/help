import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    photos: Object.values(state.photos),
    businessId: ownProps.businessId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({});
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex));

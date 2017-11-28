import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = (state, ownProps) => {
  return({
    photos: Object.values(state.photos),
    businessId: ownProps.businessId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);

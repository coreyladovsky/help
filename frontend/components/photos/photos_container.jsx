import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhoto } from '../../actions/photo_actions';

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

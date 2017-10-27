import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    business: Object.values(state.business)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);

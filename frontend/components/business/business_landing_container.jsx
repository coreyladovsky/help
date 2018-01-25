import { connect } from 'react-redux';
import BizLandingIndex from './biz_landing_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: Object.values(state.business),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BizLandingIndex);

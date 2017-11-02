import { connect } from 'react-redux';
import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: Object.values(state.business),
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page))

  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

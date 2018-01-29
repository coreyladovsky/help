import { connect } from 'react-redux';
import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions';
import { fetchUser } from '../../actions/user_actions';
import { logout, clearPage, nextPage } from '../../actions/session_actions';
import { updateBounds, frontFilter, clearFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: Object.values(state.business),
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage,
    filters: state.filters
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
    logout: ()=> dispatch(logout()),
    clearPage: () => dispatch(clearPage()),
    nextPage: (page) => dispatch(nextPage(page)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    clearFilter: () => dispatch(clearFilter()),


  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

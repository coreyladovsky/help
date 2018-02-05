import { connect } from "react-redux";
import { logout, nextPage, clearPage } from "../../actions/session_actions";
import Landing from "./landing";
import { fetchBusinesses } from "../../actions/business_actions";
import { updateBounds } from "../../actions/filter_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    nextPage: page => dispatch(nextPage(page)),
    clearPage: () => dispatch(clearPage()),
    fetchBusinesses: filters => dispatch(fetchBusinesses(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

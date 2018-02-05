import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PhotoUpload from "./photo_upload";
import { createPhoto } from "../../actions/photo_actions";
import {
  clearErrors,
  clearPage,
  nextPage,
  logout
} from "../../actions/session_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    intendedPage: state.intendedPage,
    business: state.business[ownProps.match.params.businessId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearPage: () => dispatch(clearPage()),
    logout: () => dispatch(logout()),
    nextPage: page => dispatch(nextPage(page)),
    createPhoto: photo => dispatch(createPhoto(photo)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PhotoUpload)
);

import { connect } from 'react-redux';
import { clearErrors, clearPage } from '../../actions/session_actions';
import { createReview, updateReview, fetchReview } from '../../action/review_actions';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
debugger
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));

import { connect } from 'react-redux';
import { fetchBusinesses } from '../actions/business_actions';
import { frontFilter, clearFilter } from '../actions/filter_actions';
import SearchForm from './search_form';


const mapStateToProps = (state, ownProps) => {
  return(
    {}
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
    frontFilter: (bounds) => dispatch(frontFilter(bounds)),
    clearFilter: () => dispatch(clearFilter()),

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

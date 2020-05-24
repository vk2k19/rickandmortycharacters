import { connect } from 'react-redux';
import Search from '../core/search';
import Dropdown from '../core/dropdown';

import actions from "../../redux/action";

const mapStateToProps = state => {
  return {
    ...state.search.sortBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: payload => dispatch(actions.updateSorting(payload)),
    onSubmit: payload => dispatch(actions.updateSearchString(payload))
  };
};

const SearchAndSort = props => {
  const { onSubmit, ...sortingProps} = props;
  return <>
  <div className="row searchbar">
    <div className="col-md-8">
      <Search
        onSubmit={onSubmit}
      />
    </div>
    <div className="col-md-4">
      <Dropdown {...sortingProps} />
    </div>
  </div>
  <style jsx> {
    `
    @media (max-width: 991px) {
      .col-md-4 {
        margin-top: 2rem;
      }
      .col-md-4 .form-input {
        width: 100%;
      }
    }
    @media (min-width: 992px) {
      .col-md-4 {
        text-align: right;
      }
    }
    `
  }
  </style>
  </>
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndSort);

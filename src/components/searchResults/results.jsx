import { connect } from 'react-redux';
import Card from '../core/card';
import actions from "../../redux/action";
import filterByName from './utils/filterByName';
import filterByOptions from './utils/filterByOptions';

const mapStateToProps = ({search: { name = '', results = [], filters = [] }}) => {
  const filteredResults = filterByOptions(filterByName(results, name), filters);
  return {
    hasResults: filteredResults && filteredResults.length > 0,
    results: filteredResults
  };
};

const Results = ({ hasResults = false , results = []}) => {
  return <>
  <div className="row-no-gutter search-results">
    {hasResults && results.map((option, index) =>
      <div className="col-md-3 col-xs-6 card-wrapper" key={`${option.id}-${option.name}`}>
        <Card
          { ...option }
        />
      </div>
    )}
    { !hasResults &&
      <div className="col-md-12 no-results">
        <h2 className="no-results-title">No results found.</h2>
        <p className="no-results-desc">Please try again with different filter and search parameters.</p>
      </div>
    }
  </div>
  <style jsx>{
    `
    .no-results {
      color: #fff;
    }
    .search-results {
      padding: 3.5px 0;
      display: flex;
      flex-wrap: wrap;
      background-image: url('/assets/images/double-bubble-dark.png')
    }
    .card-wrapper {
      padding: 3.5px;
    }
    .col-xs-6:nth-child(2n+2) {
      padding-right: 7px;
    }
    .col-xs-6:nth-child(2n+1) {
      padding-left: 7px;
    }
    @media (min-width: 992px) {
      .search-results {
        padding: 7px 0;
      }
      .card-wrapper {
        padding: 7px;
      }
      .col-md-3:nth-child(4n+4) {
        padding-right: 14px;
      }
      .col-md-3:nth-child(4n+1) {
        padding-left: 14px;
      }
    }
    `
  }
  </style>
  </>
}


export default connect(mapStateToProps)(Results);

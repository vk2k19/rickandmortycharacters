'use client';
import { useSelector } from 'react-redux';
import Card from '@/app/components/core/card';
import { getFilteredResults } from '@/lib/redux/slices/selectors';

const Results = () => {
  const state = useSelector((state) => state.search);
  const {results = []} = getFilteredResults(state)

  return <>
    <div className="row g-0 search-results" data-testid="search-results">
      {results.map((option, index) =>
        <div className="col-md-3 col-xs-6 card-wrapper" key={`${option.id}-${option.name}`}>
          <Card
            { ...option }
          />
        </div>
      )}
      { !results.length &&
        <div className="col-md-12 no-results" data-testid="no-search-results">
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
        background-image: url('/rickandmortycharacters/assets/images/double-bubble-dark.png')
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


export default Results;

'use client';
import { useSelector } from 'react-redux';
import Card from '@/app/components/core/card';
import { getFilteredResults } from '@/lib/redux/slices/selectors';

const Results = () => {
  const state = useSelector((state) => state.search);
  const {results = []} = getFilteredResults(state)

  return <div className="row g-0 flex-grow-1 bg-black p-2 rounded-2 row-cols-xxl-5" data-testid="search-results">
    {results.map((option) =>
      <div className="col-sm-6 col-lg-4 col-xl-3 col-xxl-0 p-2">
        <Card
          { ...option }
          key={`${option.id}-${option.name}`}

        />
      </div>
    )}
    {!results.length &&
      <div className="col-md-12" data-testid="no-search-results">
        <h2>No results found.</h2>
        <p>Please try again with different filter and search parameters.</p>
      </div>
    }
  </div>
}


export default Results;

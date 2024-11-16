'use client';
import Filter from '@/app/components/Filter';
import SearchResults from '@/app/components/SearchResults';
import SelectedFilters from '@/app/components/SelectedFilters';
import SearchAndSortBar from '@/app/components/SearchAndSortBar';

const Main = () => {
  return <div className='row g-0 gap-3 gap-md-0' test-id="dashboard">
    <div className="col-md-3">
      <Filter />
    </div>
    <div className="col-md-9 ps-md-3">
      <div className='row g-0 gap-3 flex-column flex-grow-1'>
        <SelectedFilters />
        <SearchAndSortBar />
        <SearchResults />
      </div>
    </div>
  </div>
};

export default Main;

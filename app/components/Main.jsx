'use client';
import Filter from '@/app/components/Filter';
import SearchResults from '@/app/components/SearchResults';
import SelectedFilters from '@/app/components/SelectedFilters';
import SearchAndSortBar from '@/app/components/SearchAndSortBar';

const Main = () => {
  return <>
    <div className="col-md-3">
      <Filter />
    </div>
    <div className="col-md-9">
      <div className='row gap-3 flex-column flex-grow-1'>
        <SelectedFilters />
        <SearchAndSortBar />
        <SearchResults />
      </div>
    </div>
  </>
};

export default Main;

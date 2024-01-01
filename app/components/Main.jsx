'use client';
import Filter from '@/app/components/Filter';
import SearchResults from '@/app/components/SearchResults';
import SelectedFilters from '@/app/components/SelectedFilters';
import SearchAndSortBar from '@/app/components/SearchAndSortBar';

const Main = () => {
  return <>
    <main className="row" data-testid="main">
      <div className="col-md-2">
        <Filter />
      </div>
      <div className="col-md-10">
        <SelectedFilters />
        <SearchAndSortBar />
        <SearchResults />
      </div>
    </main>
    <style jsx > {
      `.main {
        background: #222;
        color: #fff;
      }`
    }</style>
  </>
};

export default Main;

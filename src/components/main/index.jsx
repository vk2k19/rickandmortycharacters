import Filter from '../filter';
import SearchResults from '../searchResults';
import SelectedFilters from '../selectedFilters';
import SearchAndSortBar from '../searchAndSortBar';

const Main = () => <>
  <main className="row">
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

export default Main;

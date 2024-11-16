'use client';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '@/app/components/core/search';
import Dropdown from '@/app/components/core/dropdown';
import { updateSearchString, updateSortString } from '@/lib/redux/slices/search';

const SearchAndSort = () => {
  const sortBy = useSelector((state) => state.search.sortBy);
  const dispatch = useDispatch();
  const onChange = useCallback((payload) => {
      dispatch(updateSortString(payload));
  }, [dispatch])
  const onSubmit = useCallback((payload) => {
    dispatch(updateSearchString(payload));
  }, [dispatch])

  return <>
    <div className="row g-0 gap-3" data-testid="searchbar">
      <div className="col-md-8">
        <Search
          onSubmit={onSubmit}
        />
      </div>
      <div className="col-md-auto flex-grow-1">
        <Dropdown {...sortBy} onChange={onChange} />
      </div>
    </div>
  </>
}

export default SearchAndSort;

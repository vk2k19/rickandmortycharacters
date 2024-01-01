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
    <div className="row searchbar" data-testid="searchbar">
      <div className="col-md-8">
        <Search
          onSubmit={onSubmit}
        />
      </div>
      <div className="col-md-4">
        <Dropdown {...sortBy} onChange={onChange} />
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

export default SearchAndSort;

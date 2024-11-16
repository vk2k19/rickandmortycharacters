'use client';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '@/app/components/core/tag';
import { useCallback } from 'react';
import { getSetOptions } from '@/lib/redux/slices/selectors';
import { updateFilters, updateSearchString } from '@/lib/redux/slices/search';

const SelectedFilter = () =>  {
  const name = useSelector(state => state.search.name)
  const filters = useSelector(state => state.search.filters)

  const { hasFilter, selectedFilters } = getSetOptions(filters, name)

  const dispatch = useDispatch();
  const dispatchUpdateSearchString = useCallback(() => {
    dispatch(updateSearchString(''))
  }, [dispatch])
  const dispatchUpdateFilters = useCallback((payload) => {
    dispatch(updateFilters(payload))
  }, [dispatch])

  return <div className="row g-0 flex-column flex-grow-1" data-testid="selected-filters">
    <h2 className='p-0'>Selected Filters</h2>
    <div className="row g-0 gap-2" data-testid="selecte-filter-lists">
      {selectedFilters
        .map(item => <Tag
          key={item.id}
          label={item.label}
          onClick={ (evt) => dispatchUpdateFilters(item)}
          id={item.id}
          category={item.category}
          />
        )}
        {name &&
          <Tag
          id={name}
          label={name}
          onClick={dispatchUpdateSearchString}
          category={'name'}
          />
        }
        { !hasFilter &&
          <p className='m-0'>No Filters applied</p>
        }
    </div>
  </div>
}

export default SelectedFilter;

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

  return <div className="row">
    <div className="col-md-12 selected-filters" data-testid="selected-filters">
        <h2>Selected Filters</h2>
        <div className="selecte-filter-lists">
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
              <p>No Filters applied</p>
           }
        </div>
      </div>
    </div>
}

export default SelectedFilter;

'use client';
import {useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterOptions from '@/app/components/core/filterOptions';

import Image from 'next/image';
import { updateFilters } from '@/lib/redux/slices/search';
import { getFilters } from '@/lib/redux/slices/selectors';

const Filter = () => {
  const [isHidden, setHidden] = useState(true)
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();
  const dispatchUpdateFilters = useCallback((payload) => {
    dispatch(updateFilters(payload))
  }, [dispatch])

  return <div className='row g-0 gap-3' data-testid="filters">
      <div className="row g-0 align-items-center justify-content-between gap-3">
        <h2 className="col-auto m-0">Filters</h2>
        <button className="col-auto d-md-none border bg-white text-dark p-0 rounded-circle object-fit-cover" onClick={() => setHidden(!isHidden)}>
          <Image
            aria-label={isHidden ? 'show filter options' : 'hide filter options'}
            src={`/rickandmortycharacters/assets/images/svgs/${isHidden ? 'plus' : 'minus'}-circle-solid.svg`}
            alt={isHidden ? '+' : '-'} 
            width={32} height={32} 
          />
        </button>
      </div>
      <div className={`row g-0 gap-3 ${isHidden ? 'd-none d-md-flex' : ''}`}>
        {filters.map(option =>
            <FilterOptions
              key={option.id}
              title={option.label}
              items={option.items}
              name={option.id}
              onChange={dispatchUpdateFilters}
            />
        )}
      </div>
    </div>;
}

export default Filter;

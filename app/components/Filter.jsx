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

  return <>
    <div className="filters" data-testid="filters">
      <div className="row">
        <h2 className="col-xs-10 col-md-12">Filters</h2>
        <button className="col-xs-2 hidden-md hidden-lg" onClick={() => setHidden(!isHidden)}>
          <Image
            src={`/rickandmortycharacters
/assets/images/svgs/${isHidden ? 'plus' : 'minus'}-circle-solid.svg`}
            alt={isHidden ? 'show filter options' : 'hide filter options'} 
            width={32} height={32} 
          />
        </button>
      </div>
      {filters.map(option =>
        <div className={isHidden ? 'hidden-xs' : ''}   key={option.id}>
          <FilterOptions
            title={option.label}
            items={option.items}
            name={option.id}
            onChange={dispatchUpdateFilters}
          />
         </div>
      )}
    </div>
    <style jsx> {
      ` .row {
        padding-bottom: 0;
      }
      button {
        margin-top: 22px;
        margin-bottom: 10px;
        background: none;
        border: none;
      }
      button  img {
        width: 23px;
      }
      `
    }
    </style>
  </>;
}

export default Filter;

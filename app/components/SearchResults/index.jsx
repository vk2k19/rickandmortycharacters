'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Results from '@/app/components/SearchResults/results';
import { getCharactersAsync } from '@/lib/redux/slices/thunks';

const SearchResults = props => {
  const resultsLoaded = useSelector((state) => state?.search?.results?.length ?? 0 > 0);
  const dispatch = useDispatch()

  useEffect(() => {
    if(resultsLoaded === false) {
      dispatch(getCharactersAsync())
    }
  }, [dispatch, resultsLoaded]);


  return resultsLoaded ?
    <Results /> :
    <h2>Loading...</h2>
}


export default SearchResults;

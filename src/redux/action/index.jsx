import { getData, getAllCharacters } from './fetchUtils';
import TYPES from "./types";

export const getCharacters = () => dispatch => {
  getData()
    .then(res => {
      if (res.info && res.info.count) {
        return getAllCharacters(res.info.count);
      } else {
        throw Error("unable to get data try after some time");
      }
    })
    .then(res => {
      let payload = [];
      // error in response
      if(res.error) {
        dispatch({
          type: TYPES.UPDATE_RESULTS_ERROR,
          payload
        });
      } else {
        // multiple response vs single response
        payload = Array.isArray(res) ? res : [res];
        dispatch({
          type: TYPES.UPDATE_RESULTS_SUCCESS,
          payload: payload.map(char => ({
            ...char,
            origin: char.origin.name,
            location: char.location.name
          }))
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: TYPES.UPDATE_RESULTS_ERROR,
        payload: []
      });
    });
};

export const updateSearchString = payload => {
  return {
    type: TYPES.UPDATE_SEARCH_NAME,
    payload
  };
};

export const updateFilters = payload => {
  return {
    type: TYPES.UPDATE_FILTERS,
    payload
  };
};

export const updateSorting = payload => {
  return {
    type: TYPES.UPDATE_SORT,
    payload
  };
};

export default {
  updateSorting,
  updateFilters,
  updateSearchString,
  getCharacters
};

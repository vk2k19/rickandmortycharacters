/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

const getData = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character');
  return data.json();
};
  
const getAllCharacters = async (totalCharacters = 0) => {
  if(totalCharacters > 0) {
    const characterList = [...Array(totalCharacters)].map((_, i) => i + 1).join(',');
    const allCharacter = await fetch(`https://rickandmortyapi.com/api/character/${characterList}`);
    return allCharacter.json();
  }
  return [];
};

export const getFiltersAsync = createAppAsyncThunk('get/filters', async () => {
  const data = await fetch('/api/filters');
  return data.json();
})

export const getSortOptionsAsync = createAppAsyncThunk('get/sort-options', async () => {
  const data = await fetch('/api/sort-options');
  return data.json();
})

export const getCharacters = async () => getData()
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
   return payload;
  } else {
    // multiple response vs single response
    payload = Array.isArray(res) ? res : [res];
    return payload.map(char => ({
      ...char,
      origin: char.origin.name,
      location: char.location.name
    }))
  }
})
.catch(() => [])

export const getCharactersAsync = createAppAsyncThunk('get/characters', getCharacters)

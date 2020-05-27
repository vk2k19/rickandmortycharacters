import fetch from 'isomorphic-unfetch';

async function getData() {
  const data = await fetch(`https://rickandmortyapi.com/api/character`);
  return data.json();
};

async function getAllCharacters(totalCharacters = 0) {
  if(totalCharacters > 0) {
    const characterList = [...Array(totalCharacters)].map((_, i) => i + 1).join(',');
    const allCharacter = await fetch(`https://rickandmortyapi.com/api/character/${characterList}`);
    return allCharacter.json();
  }
  return [];
};

export {
  getAllCharacters,
  getData
};

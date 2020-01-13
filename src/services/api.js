const PERSONS = 'https://rickandmortyapi.com/api/character/';

const fetchPersons = () => fetch(PERSONS).then(response => response.json());

export { fetchPersons };
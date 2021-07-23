import axios from 'axios';

export const getHeroesByName = async (name) => {
  const url = `http://localhost:8080/search/${name}`;
  const { data: heroes } = await axios.get(url);
  return heroes;
}

export const getHeroById = async (heroId) => {
  const url = `http://localhost:8080/hero/${heroId}`;
  const { data: hero } = await axios.get(url);
  console.log(hero);
}


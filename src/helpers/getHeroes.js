import axios from 'axios';

export const getHeroesByName = async (name) => {
  try {
    const url = `http://localhost:8080/search/${name}`;
    const { data: heroes } = await axios.get(url);
    return heroes;
  } catch (error) {
    return error;
  }
}

export const getHeroById = async (heroId) => {
  const url = `http://localhost:8080/hero/${heroId}`;
  const { data: hero } = await axios.get(url);
  return hero;
}


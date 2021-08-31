import axios from 'axios';

const { VITE_ACCESS_TOKEN } = import.meta.env;

export const getHeroesByName = async (name) => {
  try {
    const url = `https://superheroapi.com/api.php/${VITE_ACCESS_TOKEN}/search/${name}`;
    const { data: heroes } = await axios.get(url);
    return heroes.results || [];
  } catch (error) {
    return error;
  }
}

export const getHeroById = async (heroId) => {
  try {
    const url = `https://superheroapi.com/api.php/${VITE_ACCESS_TOKEN}/${heroId}`;
    const { data: hero } = await axios.get(url);
    return hero;
  } catch (error) {
    return error;
  }
}


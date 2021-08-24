import axios from 'axios';

export const getHeroesByName = async (name) => {
  try {
    const url = `https://mw-superhero-back.herokuapp.com/search/${name}`;
    const { data: heroes } = await axios.get(url);
    return heroes;
  } catch (error) {
    return error;
  }
}

export const getHeroById = async (heroId) => {
  const url = `https://mw-superhero-back.herokuapp.com/hero/${heroId}`;
  const { data: hero } = await axios.get(url);
  return hero;
}


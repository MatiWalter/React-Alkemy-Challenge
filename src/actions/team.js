import { types } from "../types/types"

export const addHero = (hero) => ({
  type: types.addHero,
  payload: hero
});

export const removeHero = ({ id }) => ({
  type: types.removeHero,
  payload: id
});

export const teamLogout = () => ({
  type: types.logoutCleaning
});


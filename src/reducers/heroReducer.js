import { types } from "../types/types";

const team = {
  team: []
}

export const heroReducer = (state = team, action) => {
  switch (action.type) {
    case types.addHero:
      let index = state.team.findIndex(hero => hero.id === action.payload.id);
      if (index === -1)
        return {
          ...state,
          team: [...state.team, action.payload],
        }
      return state
    case types.removeHero:
      return {
        ...state,
        team: state.team.filter(
          hero => (hero.id !== action.payload)
        )
      }
    case types.logoutCleaning:
      return {
        ...state,
        team: []
      }
    default:
      return state;
  }
}

import { types } from "../types/types";

const initialTeam = {
  team: [
    {
      id: null,
      name: null
    }
  ]
}

export const heroReducer = (state = initialTeam, action) => {
  switch (action.type) {
    case types.addHero:
      return {
        ...state,
        team: [
          ...state.team,
          action.payload
        ],
      }
    case types.removeHero:
      return {
        ...state,
        team: state.team.filter(
          hero => (hero.id !== action.payload)
        )
      }
    default:
      return state;
  }
}

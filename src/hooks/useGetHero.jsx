import { useEffect, useState } from "react";
import { getHeroById } from "../helpers/getHeroes";


export const useGetHero = (heroId) => {

  const [state, setState] = useState({
    data: []
  });

  useEffect(() => {
    getHeroById(heroId)
      .then(hero => {
        setState({
          data: hero,
        });
      })
  }, [heroId]);

  return state;
}

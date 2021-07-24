import { useEffect, useState } from "react";
import { getHeroesByName } from "../helpers/getHeroes";

export const useGetHeroName = (name) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getHeroesByName(name)
      .then(hero => {
        setState({
          data: hero,
          loading: false
        });
      })
  }, [name]);

  return state;
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetHeroId } from '../../hooks/useGetHeroId';
import Swal from 'sweetalert2';
import { addHero, removeHero } from '../../actions/team';

export const ButtonAdd = ({ id }) => {

  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const { team } = useSelector(state => state.team);
  const { data: hero } = useGetHeroId(id);

  const isFavorite = () => {
    const heroes = Object.entries(team).map(h => h[1]);
    if (heroes.find(h => h.id === id) !== undefined) {
      return true;
    }
  }

  useEffect(() => {
    if (isFavorite()) {
      setFavorite(true);
    }
  }, []);

  const handleFavorite = () => {
    dispatch(addHero(hero));
    if (team.length < 6){
      setFavorite(!favorite);
      Swal.fire('Added', 'Added', 'success');
    } else {
      Swal.fire('Error', 'Your team is at their maximum capacity', 'error')
    }
  }

  const handleRemove = () => {
    dispatch(removeHero(id));
    setFavorite(!favorite);
  }

  return (
    !favorite ?
    <button
      className="btn btn-primary my-3"
      onClick={handleFavorite}
    >
      Add Hero
    </button>
    : 
    <button className="btn btn-danger my-3"
      onClick={handleRemove}
    >
      Remove Hero
    </button>
  )
}

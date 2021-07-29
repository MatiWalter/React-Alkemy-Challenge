import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHero } from '../../actions/team';
import Swal from 'sweetalert2';
import './HeroCard.css';
import { useGetHeroId } from '../../hooks/useGetHeroId';

export const HeroCard = ({ id, name, image: { url } }) => {

  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="hero-card">
      <div onClick={flip} className={(flipped ? "flipped" : "")}>
        <Front name={name} url={url} />
        <Back id={id} />
      </div>
    </div>
  )
}

const Front = ({ name, url }) => {
  return (
    <div className="front">
      <img src={url} className="img img-responsive" alt={name} />
      <div className="profile-name">{name}</div>
    </div>
  )
}

const Back = ({ id }) => {

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
    setFavorite(!favorite);
    Swal.fire('Added', 'Added', 'success');
  }

  return (
    <div className="back d-flex justify-content-center align-items-center gap-2">
      <Link to={`./hero/${id}`}>
        <button className="btn btn-secondary">Details</button>
      </Link>
      <button
        className="btn btn-secondary"
        disabled={favorite}
        onClick={handleFavorite}
      >
        Add Hero
      </button>
    </div>
  )
}

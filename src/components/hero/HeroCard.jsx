import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';

export const HeroCard = ({ id, name, image: { url } }) => {
  return (
    <Link to={`./hero/${id}`} className="my-card">
      <img src={url} className="img img-responsive" alt={name} />
      <div className="profile-name">{name}</div>
    </Link>
  )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonAdd } from './ButtonAdd';
import './HeroCard.css';

export const HeroCard = ({ id, name, image: { url } }) => {

  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="hero-card">
      <div onClick={flip} className={(flipped ? "flipped" : "")}>
        <Front name={name} url={url} />
        <Back id={id} url={url} name={name} />
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

const Back = ({ id, url, name }) => {

  return (
    <div className="back d-flex justify-content-center align-items-center gap-2">
      <img src={url} className="img img-responsive" alt={name} />
      <Link to={`./hero/${id}`}>
        <button className="btn btn-secondary">Details</button>
      </Link>
      <ButtonAdd id={id} />
    </div>
  )
}

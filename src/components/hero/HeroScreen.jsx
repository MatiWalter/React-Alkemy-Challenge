import React, { useEffect, useMemo, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useGetHero } from '../../hooks/useGetHero';
import './HeroScreen.css';

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams();
  const { data: hero } = useGetHero(heroId);
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(hero.image)
  }, [hero])

  if (hero.error) {
    return <Redirect to="/" />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const {
    name,
    biography,
    appearance,
    work,
  } = hero;

  return (
    <div div className="row mt-5" >
      <div className="col-6 hero">
        {
          image &&
          <img
            src={image.url}
            className="img-thumbnail animate__animated animate__fadeInLeft animate__fast"
            alt={name}
          />
        }
      </div>
      <div className="col-6 animate__animated animate__fadeIn">
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item"><b></b></li> */}
          {/* <li className="list-group-item"><b>Publisher: </b>{publisher}</li> */}
          {/* <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li> */}
        </ul>
        {/* <h5>Characters</h5>
        <p>{characters}</p> */}
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )

}

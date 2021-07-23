import React, { useEffect, useMemo, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useGetHero } from '../../hooks/useGetHero';
import { Loading } from '../ui/Loading';
import './HeroScreen.css';

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams();
  const { data: hero, loading } = useGetHero(heroId);
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
    <>
      {
        image
          ?
          <div className="row vh-100 d-flex align-items-center justify-content-center">
            <div className="col-8 d-flex flex-column align-items-center" >
              <div className="col-8 gap-3 d-flex">
                <div className="hero animate__animated animate__fadeIn">
                  <img
                    src={image.url}
                    className="img-thumbnail animate__animated animate__fadeInLeft animate__fast"
                    alt={name}
                  />
                </div>
                <div className="col-6">
                  <h3 className="ms-4">{name}</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre: {biography["full-name"]}</li>
                    <li className="list-group-item">Aliases: {biography.aliases.join(' - ')}</li>
                    <li className="list-group-item">Peso: {appearance.weight[1]}</li>
                    <li className="list-group-item">Altura: {appearance.height[1]}</li>
                    <li className="list-group-item">Color de ojos: {appearance["eye-color"]}</li>
                    <li className="list-group-item">Color de pelo: {appearance["hair-color"]}</li>
                    <li className="list-group-item">Lugar de trabajo: {work.base}</li>
                  </ul>
                </div>
              </div>
              <button
                className="btn btn-primary mt-5"
                onClick={handleReturn}
              >
                Return
              </button>
            </div >
          </div >
          : <Loading />
      }
    </>
  )
}

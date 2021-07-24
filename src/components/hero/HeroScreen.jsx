import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useGetHeroId } from '../../hooks/useGetHeroId';
import { Loading } from '../ui/Loading';
import './HeroScreen.css';

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams();
  const { data: hero, loading } = useGetHeroId(heroId);
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

  const handleFavorite = () => {
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
          <div className="row">
            <div className="col-12 h-100 d-flex flex-row justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center flex-lg-row">
                <div className="col-7 col-sm-6 col-md-5 col-lg-9 d-lg-flex mt-lg-5">
                  <div>
                    <h3 className="mt-3 text-center">{name}</h3>
                    <img
                      src={image.url}
                      className="img-thumbnail animate__animated animate__fadeInLeft animate__fast"
                      alt={name}
                    />
                  </div>
                  <div className="ms-lg-3 mt-lg-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Nombre: {biography["full-name"]}</li>
                      <li className="list-group-item">Aliases: {biography.aliases.join(' - ')}</li>
                      <li className="list-group-item">Peso: {appearance.weight[1]}</li>
                      <li className="list-group-item">Altura: {appearance.height[1]}</li>
                      <li className="list-group-item">Color de ojos: {appearance["eye-color"]}</li>
                      <li className="list-group-item">Color de pelo: {appearance["hair-color"]}</li>
                      <li className="list-group-item">Lugar de trabajo: {work.base}</li>
                    </ul>
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-primary my-3"
                        onClick={handleFavorite}
                      >
                        Add to team
                      </button>

                      <button
                        className="btn btn-secondary my-3"
                        onClick={handleReturn}
                      >
                        Return
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <div className="row d-flex align-items-center justify-content-center">
          //   <div className="col-12 d-flex flex-column align-items-center" >
          //     <div className="col-12 gap-3 d-flex flex-column">
          //       <div className="hero animate__animated animate__fadeIn">
          //         <img
          //           src={image.url}
          //           className="img-thumbnail animate__animated animate__fadeInLeft animate__fast"
          //           alt={name}
          //         />
          //       </div>
          //       <div className="col-12">
          //         <h3 className="ms-4">{name}</h3>
          // <ul className="list-group list-group-flush">
          //   <li className="list-group-item">Nombre: {biography["full-name"]}</li>
          //   <li className="list-group-item">Aliases: {biography.aliases.join(' - ')}</li>
          //   <li className="list-group-item">Peso: {appearance.weight[1]}</li>
          //   <li className="list-group-item">Altura: {appearance.height[1]}</li>
          //   <li className="list-group-item">Color de ojos: {appearance["eye-color"]}</li>
          //   <li className="list-group-item">Color de pelo: {appearance["hair-color"]}</li>
          //   <li className="list-group-item">Lugar de trabajo: {work.base}</li>
          // </ul>
          //       </div>
          //     </div>
          //     <div className="d-flex gap-2">
          //       <button
          //         className="btn btn-primary mt-5"
          //         onClick={handleFavorite}
          //       >
          //         Add to team
          //       </button>

          //       <button
          //         className="btn btn-secondary mt-5"
          //         onClick={handleReturn}
          //       >
          //         Return
          //       </button>
          //     </div>
          //   </div >
          // </div >
          : <Loading />
      }
    </>
  )
}

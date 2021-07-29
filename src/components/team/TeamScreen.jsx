import React from 'react';
import { useSelector } from 'react-redux';
import { HeroGrid } from '../hero/HeroGrid';

export const TeamScreen = () => {

  const { team } = useSelector(state => state.team);

  return (
    <div className="team d-flex flex-column align-items-center">
      <h1 className="text-center">Your team</h1>
      <h2>Powerstats</h2>
      <h3>Average Height</h3>
      <h3>Average Weight</h3>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {
          <HeroGrid heroes={team} />
        }
      </div>
      {
        team.map(h => console.log(h.powerstats))
      }
    </div>
  )
}

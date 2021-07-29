import React from 'react';
import { useSelector } from 'react-redux';
import { HeroGrid } from '../hero/HeroGrid';

export const TeamScreen = () => {

  const { team } = useSelector(state => state.team);

  return (
    <div className="team d-flex flex-column align-items-center">
      <h1 className="text-center">Your team</h1>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {
          <HeroGrid heroes={team} />
        }
      </div>
    </div>
  )
}

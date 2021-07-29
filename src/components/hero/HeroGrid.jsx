import React from 'react'
import { HeroCard } from './HeroCard';

export const HeroGrid = ({ heroes }) => {
  return (
    <>
      {heroes.map(hero => {
        return (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        )
      })}
    </>
  )
}

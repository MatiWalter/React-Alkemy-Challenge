import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Powerstats = () => {

  const accumulativeStats = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  }

  const { team } = useSelector(state => state.team);
  team.map(hero => {
    accumulativeStats.intelligence += Number(hero.powerstats.intelligence)
    accumulativeStats.strength += Number(hero.powerstats.strength)
    accumulativeStats.speed += Number(hero.powerstats.speed)
    accumulativeStats.durability += Number(hero.powerstats.durability)
    accumulativeStats.power += Number(hero.powerstats.power)
    accumulativeStats.combat += Number(hero.powerstats.combat)
  });

  const [principalStat, setPrincipalStat] = useState();

  useEffect(() => {
    const maxStat = Math.max(...Object.values(accumulativeStats));
    setPrincipalStat(Object.keys(accumulativeStats).find(stat => accumulativeStats[stat] === maxStat));
  }, [team])

  return (
    <div>
      <h2>Principal Stat: <span className="text-primary">{principalStat}</span></h2>
      <h2>Team powerstats</h2>
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary"> Intelligence: {accumulativeStats.intelligence} 🧠</li>
        <li className="list-group-item list-group-item-danger"> Strength: {accumulativeStats.strength} 💪🏻</li>
        <li className="list-group-item list-group-item-warning"> Speed: {accumulativeStats.speed} 💨</li>
        <li className="list-group-item list-group-item-success"> Durability: {accumulativeStats.durability} 🛡</li>
        <li className="list-group-item list-group-item-info"> Power: {accumulativeStats.power} 💣</li>
        <li className="list-group-item list-group-item-secondary"> Combat: {accumulativeStats.combat} ⚔</li>
      </ul>
    </div>
  )
}

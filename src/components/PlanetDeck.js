import React from 'react'

import PlanetCard from './PlanetCard';

const PlanetDeck = ({ planets }) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {planets.map((planet) => (
                <PlanetCard {...planet} />
            ))}
        </div>
    )
}

export default PlanetDeck

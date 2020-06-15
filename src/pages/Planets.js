import React, { useState, useEffect } from 'react'

import axios from 'axios';

import PlanetDeck from '../components/PlanetDeck';

import { CardDeck, CardColumns } from 'react-bootstrap';

const Planets = () => {

    const [ planets, setPlanets ] = useState([]);

    // load from api on mount
    useEffect(() => {
        
        axios.get('https://swapi.dev/api/planets').then(({ data }) => {
            setPlanets(data.results)
        });

        return () => {};
    }, [])

    return (
        <div className='mt-4'>
            { planets && 
                <PlanetDeck planets={planets} />
            }
        </div>
    )
}

export default Planets

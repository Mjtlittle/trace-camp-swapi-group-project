<<<<<<< HEAD
import React from 'react'

const Planets = () => {
    return (
        <div>
            
=======
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
>>>>>>> 08db9b8eda58c349ce3344ed77fa48cff1cac8ab
        </div>
    )
}

export default Planets

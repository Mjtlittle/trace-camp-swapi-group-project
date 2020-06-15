import React from 'react'

import './PlanetCard.css'
import { Card, ListGroup } from 'react-bootstrap';

import { GiOrbital, GiMoonOrbit } from 'react-icons/gi';
import { FaThermometerHalf, FaAnchor, FaMountain, FaWater } from 'react-icons/fa';
import { BsDashCircle, BsPeopleFill } from 'react-icons/bs';
import { FiRotateCw } from 'react-icons/fi';

import PlanetCardDetail from './PlanetCardDetail';

const PlanetCard = (props) => {

    const titleize = (text) => {
        return text
            .split(' ')
            .map((word) => (
                word[0].toUpperCase()
                + word.slice(1)
            )).join(' ')
    }

    const planetDetails = [
        {
            icon: <BsPeopleFill />,
            label: 'Population',
            value: (isNaN(props.population) ?
                    'Unknown' :
                    props.population),
        },
        {
            icon: <FaAnchor />,
            label: 'Gravity',
            value: props.gravity.split(' ')[0] + ' Gs',
        },
        {
            icon: <FaThermometerHalf />,
            label: 'Climate',
            value: titleize(props.climate),
        },
        {
            icon: <FaMountain />,
            label: 'Terrain',
            value: titleize(props.terrain),
        },
        {
            icon: <FaWater />,
            label: 'Percent Surface Water',
            value: (isNaN(props.surface_water) ?
                    'Unknown' :
                    props.surface_water + '%'),
        },
        {
            icon: <GiOrbital />,
            label: 'Orbital Period',
            value: props.orbital_period + ' days',
        },
        {
            icon: <FiRotateCw />,
            label: 'Rotation Period',
            value: props.rotation_period + ' hours',
        },
        {
            icon: <BsDashCircle />,
            label: 'Diameter',
            value: props.diameter + ' km',
        },
    ]

    return (
        <Card className='PlanetCard'>
            <Card.Body>
                <Card.Title>
                    <GiMoonOrbit size='3em' />
                    <br />
                    {props.name}
                </Card.Title>
                <ListGroup variant="flush">
                    {planetDetails.map((planetInfo) => (
                        <PlanetCardDetail {...planetInfo}/>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

PlanetCard.defaultProps = {
    "climate": "Arid",
    "diameter": "10465",
    "created": "2014-12-09T13:50:49.641000Z",
    "edited": "2014-12-15T13:48:16.167217Z",
    "films": [],
    "gravity": "1",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "120000",
    "residents": [],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "https://swapi.dev/api/planets/1/"
}



export default PlanetCard

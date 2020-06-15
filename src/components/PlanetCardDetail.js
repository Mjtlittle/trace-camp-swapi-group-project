import React from 'react'

import { ListGroup } from 'react-bootstrap';
import { IconContext } from 'react-icons';

const PlanetCardDetail = ({
    icon,
    label,
    value,
}) => {
    return (
        <ListGroup.Item>
            <IconContext.Provider value={{ size: '2em' }}>
                {icon}
            </IconContext.Provider>
            <span className='ml-2'>
                {label}:
            </span>
            <span className='text-secondary ml-2'>
                {value}
            </span>
        </ListGroup.Item>
    )
}

export default PlanetCardDetail

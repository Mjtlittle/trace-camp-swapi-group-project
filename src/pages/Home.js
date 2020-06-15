import React, {Component} from 'react'

import './Home.css'

import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <h1 className='Home-title'>Home Page</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_D0ZQPqeJkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Home;
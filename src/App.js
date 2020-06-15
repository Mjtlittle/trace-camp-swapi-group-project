import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import Home from './pages/Home';
import Spaceships from './pages/Spaceships';
import People from './pages/People';
import Planets from './pages/Planets';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand>Star Wars API</Navbar.Brand>

          <Nav className="mr-auto">
            <Link className='App-link' to='/'>Home</Link>
            <Link className='App-link' to='/spaceships'>Spaceships</Link>
            <Link className='App-link' to='/people'>People</Link>
            <Link className='App-link' to='/planets'>Planets</Link>
            <Link className='App-link' to='/vehicles'>Vehicles</Link>
          </Nav>
        </Navbar>


        <Route exact path='/' component={Home} />
        <Route exact path='/spaceships' component={Spaceships} />
        <Route exact path='/people' component={People} />
        <Route exact path='/planets' component={Planets} />
        <Route exact path='/vehicles' component={Vehicles} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import axios from "axios";
import './Spaceships.css';
class Spaceships extends Component {
    state  = {
        starships: null,
    };

    componentDidMount(){
        axios
            .get("https://swapi.dev/api/starships/3/")
            .then((response) => this.setState({starships: response.data}));
    }
    render(){
        return (
            <div>
                <span>SpaceShips!</span>
                {this.state.starships && (
                    <React.Fragment>
                        <h1>{this.state.starships.name}</h1>
                        <img className="spaceship-img"src= "https://vignette.wikia.nocookie.net/starwars/images/5/58/ISD-I.png/revision/latest/scale-to-width-down/340?cb=20150416041211" />
                    <div className="spaceship-text">
                        <p>Model: {this.state.starships.model}</p>
                        <p>Manufacturer: {this.state.starships.manufacturer}</p>
                        <p>Cost(in credits): {this.state.starships.cost_in_credits}</p>
                        <p>Length: {this.state.starships.length}</p>
                        <p>Max Atmospheric Speed: {this.state.starships.max_atmosphering_speed}</p>
                        <p>Crew: {this.state.starships.crew}</p>
                        <p>Passengers: {this.state.starships.passengers}</p>
                        <p>Cargo Capacity: {this.state.starships.cargo_capacity}</p>
                        <p>Consumables: {this.state.starships.consumables}</p>
                        <p>HyperDrive rating :{this.state.starships.hyperdrive_rating}</p>
                        <p>MGLT: {this.state.starships.MGLT}</p>
                        <p>Starship class: {this.state.starships.starship_class}</p>
                        <p>Created: {this.state.starships.created}</p>
                        <p>edited: {this.state.starships.edited}</p>
                    </div>
                    </React.Fragment>
                )}

            </div>
        );
    }
}

export default Spaceships

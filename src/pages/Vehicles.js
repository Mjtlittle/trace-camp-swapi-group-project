<<<<<<< HEAD
import React from 'react'

const Vehicles = () => {
    return (
        <div>
        </div>
    )
}

export default Vehicles
=======
import React, {Component} from 'react'
import './Vehicles.css';
import axios from 'axios';


class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {index:1,data:[]}
        this.changeVeh = this.changeVeh.bind(this)
    }

    async componentDidMount() {
        const url = `https://swapi.dev/api/vehicles/${this.state.index}/`;
        let response = await axios.get(url);
        console.log(response.data)
        this.setState({index:this.state.index+1})
        this.setState({data: response.data})
    }

    async changeVeh(){
        this.setState({index:this.state.index+1})
        const url = `https://swapi.dev/api/vehicles/${this.state.index}/`;
        let response = await axios.get(url);
        this.setState({data: response.data})
    }

    render(){
        return (
            <div className="Vehicles">
                <h1 className='Vehicles-title'>LEARN ABOUT VEHICLES!</h1>
                <div className = "Veh-container">
                    <h3 className = "Vehicle-name">Vehicle Name: {this.state.data.name}</h3>
                    <p>Vehicle Model: {this.state.data.model}</p>
                    <p>Vehicle Manufacturer: {this.state.data.manufacturer}</p>
                    <p>Vehicle Cost in Credits: {this.state.data.cost_in_credits}</p>
                    <p>Vehicle Length: {this.state.data.length}</p>
                    <p>Vehicle Max Atmosphering Speed: {this.state.data.max_atmosphering_speed}</p>
                    <p>Vehicle Crew: {this.state.data.crew}</p>
                    <p>Vehicle Passengers: {this.state.data.passengers}</p>
                    <p>Vehicle Cargo Capacity: {this.state.data.cargo_capacity}</p>
                </div>
                <button className = "Vehicles-button" onClick={this.changeVeh}>Show me a vehicle!</button>
            </div>
        );
    }
}

export default Vehicles;
>>>>>>> 08db9b8eda58c349ce3344ed77fa48cff1cac8ab

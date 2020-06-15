import React, { Component } from 'react';
import './People.css';
import axios from "axios";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 1, data: []}
        this.changePerson = this.changePerson.bind(this)
    }

    async componentDidMount() {
        const url = `https://swapi.dev/api/people/${this.state.index}/`;
        let response = await axios.get(url)
        console.log(response.data);
        this.setState({index: this.state.index + 1})
        this.setState({data: response.data} )
    }

    async changePerson() {
        this.setState({index: this.state.index + 1})
        const url = `https://swapi.dev/api/people/${this.state.index}/`;
        let response = await axios.get(url)
        this.setState({data: response.data} )
    }
    render() {
        return (
            <div className="People">
                <h1 className="People-title">People</h1>
                <button className="People-Button" onClick={this.changePerson}>Change Person</button>
                <h1 className="People-name">{this.state.data.name}</h1>
                <h1 className="People-info">Gender: {this.state.data.gender}</h1>
                <h1 className="People-info">Height: {this.state.data.height}</h1>
                <h1 className="People-info">Mass: {this.state.data.mass}</h1>
                <h1 className="People-info">Hair Color: {this.state.data.hair_color}</h1>
            </div>
        );
    }
}

export default People

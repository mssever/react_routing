import React, { Component } from "react"
import {Link} from 'react-router-dom'

export default class Vehicles extends Component {
    constructor() {
        super()
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(response => response.json())
            .then(data => {this.setState({vehicles: data})})
    }
    render() {
        return (
            <React.Fragment>
                <h1>Vehicles</h1>
                <ol>
                    {
                        this.state.vehicles.sort((a, b) => {
                            a = a.name.toLowerCase()
                            b = b.name.toLowerCase()
                            if(a < b) return -1
                            if(a > b) return 1
                            return 0
                        }).map(vehicle => <li key={vehicle.id}><Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link></li>)
                    }
                </ol>
            </React.Fragment>
        )
    }
}

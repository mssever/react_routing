import React, { Component } from "react"

export default class Films extends Component {
    constructor() {
        super()
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(data => {this.setState({films: data})})
    }
    render() {
        return (
            <React.Fragment>
                <h1>Films</h1>
                <ol>
                    {this.state.films.map(film => <li key={film.id}>{film.original_title} ({film.title})</li>)}
                </ol>
            </React.Fragment>
        )
    }
}

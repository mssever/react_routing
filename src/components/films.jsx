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
                    {
                        this.state.films.sort((a, b) => {
                            a = a.title.toLowerCase()
                            b = b.title.toLowerCase()
                            if(a < b) return -1
                            if(a > b) return 1
                            return 0
                        }).map(film => <li key={film.id}>{film.title} ({film.original_title})</li>)
                    }
                </ol>
            </React.Fragment>
        )
    }
}

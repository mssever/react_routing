import React, { Component } from "react"

export default class People extends Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then(data => {this.setState({people: data})})
    }
    render() {
        return (
            <React.Fragment>
                <h1>People</h1>
                <ol>
                    {
                        this.state.people.sort((a, b) => {
                            a = a.name.toUpperCase();
                            b = b.name.toUpperCase();
                            if(a < b) return -1
                            if(a > b) return 1
                            return 0
                        }).map(person => <li key={person.id}>{person.name}</li>)
                    }
                </ol>
            </React.Fragment>
        )
    }
}

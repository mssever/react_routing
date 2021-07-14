import React from 'react'
import {useParams} from 'react-router-dom'
import { Species } from '../../data/get_info'

export default function IndivPerson(props) {
    //console.log(props)
    let [person, setPerson] = React.useState({})
    let {id} = useParams()
    //console.log(id)
    React.useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <React.Fragment>{console.log('Person', person)}
            <h1>{person.name}</h1>
            <dl>
                <dt>Age</dt>
                <dd>{person.age}</dd>
                <dt>Eye Color</dt>
                <dd>{person.eye_color}</dd>
                <dt>Hair Color</dt>
                <dd>{person.hair_color}</dd>
                <dt>Gender</dt>
                <dd>{person.gender}</dd>
                <dt>Species</dt>
                {<dd><Species url={person.species} /></dd>}
            </dl>
        </React.Fragment>
    )
}

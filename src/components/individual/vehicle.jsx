import React from 'react'
import {useParams} from 'react-router-dom'

export default function IndivVehicle(props) {
    //console.log(props)
    let [vehicle, setVehicle] = React.useState({})
    let {id} = useParams()
    //console.log(id)
    React.useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${id}`)
            .then(response => response.json())
            .then(data => setVehicle(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <React.Fragment>{console.log(vehicle)}
            <h1>{vehicle.name}</h1>
            <dl>
                <dt>Class</dt>
                <dd>{vehicle.vehicle_class}</dd>
                    {
                        (() => {
                            if(vehicle.length) {
                                return (<React.Fragment>
                                    <dt>Length</dt>
                                    <dd>{vehicle.length}</dd>
                                </React.Fragment>)
                            } else return null
                        })()
                    }
                <dt>Description</dt>
                <dd>{vehicle.description}</dd>
            </dl>
        </React.Fragment>
    )
}

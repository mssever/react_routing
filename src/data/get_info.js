import React from "react"

export function Species({url}) {
  let [species, setSpecies] = React.useState('')
  fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data); return setSpecies(data)})
    .catch(err => console.error(err))
  return (<React.Fragment>
    {species.name}
  </React.Fragment>)
}

import Films from '../components/films'
import People from '../components/people'
import Vehicles from '../components/vehicles'
import IndivVehicle from '../components/individual/vehicle'

class Route {
  constructor(func, path, name, inNav=true) {
    this.func = func
    this.path = path
    this.name = name
    this.inNav = inNav
  }
}

const routes = [
  new Route(() => <h1>Home</h1>, '/', 'Home'),
  new Route(Films, '/films', 'Films'),
  new Route(People, '/people', 'People'),
  new Route(Vehicles, '/vehicles', 'Vehicles'),
  new Route(IndivVehicle, '/vehicles/:id', null, false)
]

export default routes

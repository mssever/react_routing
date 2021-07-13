import { Link } from 'react-router-dom';
import routes from '../data/routes'


export default function Navbar(props) {
    return (
            <ul>
                {
                    routes.map(route => {
                        if(route.inNav) {
                            return (
                                <li key={route.path}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            )
                        } else { return null }
                    })
                }
            </ul>
    )
}

import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

function PublicRoute(props) {

    const {isLogged} = useAuth();

    if(isLogged()) return <Redirect to={routes.proyects}/>

    return (
        <Route {...props}/>
    )
}

export default PublicRoute
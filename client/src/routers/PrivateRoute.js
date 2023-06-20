import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

function PrivateRoute({ hasRole: role, ...rest }) {

    const {hasRole, isLogged} = useAuth();

    if(role && !hasRole(role)) {
        return (
            <Redirect to={routes.home}/>
        );
    }

    if(!isLogged()) {
        return (
            <Redirect to={routes.login}/>
        );
    } 

    return (
        <Route {...rest}/>
    );
}

export default PrivateRoute
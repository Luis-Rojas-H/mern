
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ApRegisterPagep from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import UsersPage from '../pages/UsersPage';
import NorFountPage from '../pages/NorFountPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

function AppRouter() {
	return (
        <Switch>
            <PublicRoute exact path= {routes.home} component={HomePage}/>
            <PublicRoute exact path={routes.login} component={LoginPage}/>
            <PublicRoute exact path={routes.register} component={ApRegisterPagep}/>
            <PrivateRoute exact path={routes.account} component={AccountPage}/>
            <PrivateRoute exact path={routes.proyects} component={ProjectsPage}/>
            <PrivateRoute exact path={routes.project()} component={ProjectPage}/>
            <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage}/>

            <Route exact path='*' component={NorFountPage}/>
            </Switch>
	);
}

export default AppRouter;
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../helpers/routes';
import useAuth from '../auth/useAuth';

function Navigation() {

    const { logout } = useAuth();

    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand as={NavLink} to={routes}>
                Task Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                <Nav>
                    <Nav.Link as={NavLink} to={routes.proyects}>Projectos</Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item  as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi cuenta</Nav.Link>
                    <Nav.Link to={routes.account} onClick={logout}>Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
import useAuth from "../auth/useAuth";

const userCredentials = {  };

function LoginPage() {

	const { login } = useAuth();

	return (
			<div>
                <h1>Login</h1>
				<button onClick= {() => login(userCredentials)} >Iniciar Sesión</button>
            </div>
	);
}

export default LoginPage;
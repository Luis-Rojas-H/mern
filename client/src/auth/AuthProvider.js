import { createContext, useState } from 'react';
import roles from '../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {


    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        setUser({ id: '1', name: 'Luis', email: 'larojash@uni.pe', role: roles.admin });
    };

    const logout = () => setUser(null);

    const updateUser = (data) => {
		setUser({
			...user,
			...data
		})
	}

    const isLogged = () => !!user;

    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        updateUser,
        isLogged,
        hasRole,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    );
}

import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = auth.onIdTokenChanged((user) => {
            console.log('[From AuthProvider]', {user});
            if (user?.uid) {
                setUser(user);
                localStorage.setItem('accessToken', user.accessToken);
                return;
            }

            // reset user info
            setUser({});
            localStorage.clear();
            navigate('/login');
        });

        // cleanup function khi component unmount
        return () => {
            unsubscribed();
        }

    }, [auth]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

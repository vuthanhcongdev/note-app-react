import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const auth = getAuth();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({res});
    }

    if (user?.uid) {
        navigate('/');
        return;
    }

    return (
        <>
            <Typography variant='h5' sx={{ marginBottom: '10px' }}>Welcome to NOTE APP</Typography>
            <Button variant='outlined' onClick={handleLoginWithGoogle}>
                Login with Google
            </Button>
        </>
    )
}
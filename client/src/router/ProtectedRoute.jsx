import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    if (!localStorage.getItem('accessToken')) {
        console.log('NEED LOGIN!');
        navigate('/login');
        return;
    }

    return (
        <Outlet></Outlet>
    )
}

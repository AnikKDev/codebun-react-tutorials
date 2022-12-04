import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/registration')
        }
    }, [user, navigate])

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Homepage</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        <li>{!user ? <Link to="/registration" className='btn'>Register</Link> : <button className='btn' onClick={handleLogout}>Logout</button>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { CartContext } from '../../../contexts/CartProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const { bookings, setBookings } = useContext(CartContext);
    // console.log(bookings);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleNavigate = () => {
        navigate('/bookings');
    }

    const menu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>About</Link></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Home Scissors</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                <div onClick={handleNavigate} className="indicator mr-4 hover:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{bookings.length}</span>
                                </div>
                                <Link onClick={handleLogOut} className="btn">Logout</Link>
                            </>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
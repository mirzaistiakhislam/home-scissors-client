import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { CartContext } from '../../../contexts/CartProvider';
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // const { bookings, setBookings } = useContext(CartContext);

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
            {
                user && <li className='flex justify-between items-stretch'><Link to='bookings'>Purchase Packages <FaCartShopping className='self-center' /></Link></li>
            }
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
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Home Scissors</Link>
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
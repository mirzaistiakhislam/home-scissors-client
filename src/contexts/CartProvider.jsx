import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    // const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('access-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.error === 1) {
    //                 console.log(data.message);
    //             }
    //             else {
    //                 setBookings(data);
    //             }
    //         })
    // }, [user?.email]);

    const cartInfo = {
        // bookings,
        // setBookings
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
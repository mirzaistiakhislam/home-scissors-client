import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user?.email])

    const cartInfo = {
        bookings,
        setBookings
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
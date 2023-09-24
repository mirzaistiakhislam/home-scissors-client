import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

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
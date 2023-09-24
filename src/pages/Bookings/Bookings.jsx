import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import BookingsRow from './BookingsRow';

const Bookings = () => {

    const { bookings, setBookings } = useContext(CartContext);
    // console.log(bookings);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                            ></BookingsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
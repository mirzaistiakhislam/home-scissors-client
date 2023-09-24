import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import BookingsRow from './BookingsRow';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { bookings, setBookings } = useContext(CartContext);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
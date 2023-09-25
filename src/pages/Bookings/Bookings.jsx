import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import BookingsRow from './BookingsRow';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2';

const Bookings = () => {

    // const { bookings, setBookings } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error === 1) {
                    console.log(data.message);
                }
                else {
                    setBookings(data);
                }
            })
    }, [user?.email]);

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

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirmed';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            bookings.map((booking) => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></BookingsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
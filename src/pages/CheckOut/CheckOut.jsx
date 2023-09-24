import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import PackageDetailsBanner from '../PackageDetails/PackageDetailsBanner';
import CheckOutBanner from './CheckOutBanner';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import { CartContext } from '../../contexts/CartProvider';

const CheckOut = () => {

    const checkoutPackage = useLoaderData();
    const { _id, title, img, price } = checkoutPackage;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const deliveryDate = form.date.value;

        const bookings = {
            package_id: _id,
            package_title: title,
            package_image: img,
            package_price: price,
            customer_name: name,
            customer_email: user.email || null,
            customer_phoneNumber: phoneNumber,
            delivery_address: location,
            delivery_date: deliveryDate
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Booked',
                        showConfirmButton: false,
                        timer: 5000
                    });

                    navigate('/');
                    window.location.reload();
                }

            })
    }

    return (
        <div>
            <div>
                <CheckOutBanner
                    checkoutPackage={checkoutPackage}
                ></CheckOutBanner>
            </div>
            <div className='flex justify-center my-12'>

                <form onSubmit={handleSubmit} className='bg-base-200 p-6 rounded-lg'>
                    <h2 className='text-2xl mb-6'>Fill-Up The Form!!</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" required />
                        <input type="date" name='date' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <input type="submit" className="btn btn-outline w-full my-2" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
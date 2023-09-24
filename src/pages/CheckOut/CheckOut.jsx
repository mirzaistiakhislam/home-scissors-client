import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import PackageDetailsBanner from '../PackageDetails/PackageDetailsBanner';
import CheckOutBanner from './CheckOutBanner';

const CheckOut = () => {

    const checkoutPackage = useLoaderData();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const deliveryDate = form.date.value;

        console.log(name, phoneNumber, location, deliveryDate);

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
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full max-w-xs " />
                        <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        <input type="date" name='date' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" className="btn btn-outline w-full my-2" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
import React from 'react';
import PackageDetailsBanner from './PackageDetailsBanner';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import useTitle from '../../hooks/useTitle/useTitle';

const PackageDetails = () => {

    useTitle('Package Details - Home Scissors');

    const packageDetails = useLoaderData();
    const { Pre_Service_Instructions, benefits, description, facilities, img, options, price, service_id, title, _id } = packageDetails;

    return (
        <div>
            <div>
                <PackageDetailsBanner
                    packageDetails={packageDetails}
                ></PackageDetailsBanner>
            </div>
            <div className=''>
                <div className=' my-6 text-left'>
                    {description}
                </div>
                <h2 className='text-2xl text-[#FFE7A3]'>We Give You The Following Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6'>
                    {
                        options.map((option, i) =>
                            <div className="card bg-base-100 shadow-xl image-full" key={i}>
                                <figure><img src={option.img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl"><b>{option.title}</b></h2>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    {
                        facilities.map((facility, i) =>
                            <div className="bg-base-300 shadow-xl rounded-xl border border-t-[#DCA54C]" key={i}>
                                <div className="card-body p-4">
                                    <h2 className='text-left text-xl'>{facility.name}</h2>
                                    <p className='text-left'>{facility.details}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline w-1/2 min-w-full my-6 text-xl">Checkout <FaArrowRightLong size={30} /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
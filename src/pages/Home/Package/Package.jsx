import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Package = ({ pkg }) => {

    const { _id, title, img, price } = pkg;

    return (
        <div className=''>
            <div className="p-4 h-[360px] bg-base-200 shadow-xl rounded-xl">
                <figure className="mb-5">
                    <img src={img} alt="" className="rounded-xl opacity-75 hover:opacity-100" />
                </figure>
                <div className="card-body p-0">
                    <h2 className="card-title text-left">{title}</h2>
                    <div className='flex justify-between items-stretch'>
                        <p className='text-left'>Price: <span className='text-[#FFE781]'><b>${price}</b></span></p>
                        <div className='hover:text-white cursor-pointer'>
                            <Link to={`/package/${_id}`}>
                                <FaArrowRightLong className='self-center' size={30} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
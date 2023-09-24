import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPackages(data);
            })
    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-4xl'>Exclusive Packages</h2>
            <p>Best Quality Products | Trained & Verified Team Members | Pocket-Friendly Offers</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6'>
                {
                    packages.map(pkg => <Package
                        key={pkg._id}
                        pkg={pkg}
                    ></Package>)
                }
            </div>

        </div>
    );
};

export default Packages;
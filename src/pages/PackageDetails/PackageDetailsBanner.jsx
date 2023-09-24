import React from 'react';

const PackageDetailsBanner = ({ packageDetails }) => {
    // console.log(packageDetails);
    const { img, title } = packageDetails;

    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${img})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="mb-5">Professional service at your doorstep</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailsBanner;
import React from 'react';

const CheckOutBanner = ({ checkoutPackage }) => {

    const { img, title } = checkoutPackage;

    return (
        <div>
            <div className="carousel w-full h-96 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${img})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Checkout</h1>
                                <h2 className="mb-5 text-xl">{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutBanner;
import React from 'react';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                                <h1 className="text-5xl font-bold">Home Scissors</h1>
                                <p className='mb-5 text-xl underline'><b>For Men</b></p>
                                <p className="mb-5">Professional service at your doorstep</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                                <h1 className="text-5xl font-bold">Home Scissors</h1>
                                <p className='mb-5 text-xl underline'><b>For Men</b></p>
                                <p className="mb-5">Professional service at your doorstep</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                {/* <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
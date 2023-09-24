import React from 'react';
import CountUp from 'react-countup';

const BottomBanner = () => {

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 -mt-2'>
            <div className="card h-32 p-3 grid content-center ">
                <div className='grid place-content-center '>
                    <CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-5xl'>
                                <span ref={countUpRef} />K+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="mt-1">
                    <h2 className="text-xl text-center">Happy Customers</h2>
                </div>
            </div>
            <div className="card md:h-32 p-3 grid content-center ">
                <div className='grid place-content-center '>
                    <CountUp start={0} end={20} delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-5xl'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="mt-1">
                    <h2 className="text-center text-xl">Cities Served</h2>
                </div>
            </div>
            <div className="card shadow-xl h-32 p-3 grid content-center ">
                <div className='grid place-content-center '>
                    <CountUp start={0} end={24} delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-5xl'>
                                <span ref={countUpRef} />/7
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="mt-1">
                    <h2 className="text-center text-xl">Customer Support</h2>
                </div>
            </div>

            <div className="card shadow-xl h-32 p-3 grid content-center ">
                <div className='grid place-content-center'>
                    <CountUp start={0} end={8} delay={0}>
                        {({ countUpRef }) => (
                            <div className='text-5xl'>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="mt-1">
                    <h2 className="text-center text-xl">Years Of Experience</h2>
                </div>
            </div>
        </div>
        // <div>
        //     <h2 className='text-2xl'>How to Order?</h2>
        //     <ul className="steps">
        //         <li className="step step-primary">Select Service</li>
        //         <li className="step step-primary">Book Your Schedule</li>
        //         <li className="step step-primary">Place Order</li>
        //     </ul>
        // </div>
    );
};

export default BottomBanner;
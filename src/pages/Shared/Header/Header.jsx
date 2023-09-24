import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner';

const Header = () => {

    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Header;
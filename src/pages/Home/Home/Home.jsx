import React from 'react';
import Header from '../../Shared/Header/Header';
import Packages from '../Packages/Packages';
import NavBar from '../../Shared/NavBar/NavBar';
import useTitle from '../../../hooks/useTitle/useTitle';

const Home = () => {

    useTitle('Home - Home Scissors');

    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Header></Header>
            <Packages></Packages>
        </div>
    );
};

export default Home;
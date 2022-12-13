import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='row'>

            <div className='col-9'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-3 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;

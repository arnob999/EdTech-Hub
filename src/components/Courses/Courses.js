import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div>

            <div className='row '>
                <div className='col-lg-3 col-12'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-lg-9 col-12'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;

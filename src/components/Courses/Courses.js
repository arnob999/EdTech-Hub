import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='row'>
            <div className='col-lg-9 col-12"'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-lg-3 col-12"'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;

import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleCourse.css'
const SingleCourse = ({ course }) => {
    const { title, pic, intro, details } = course;
    return (
        <div className='my-5 d-flex courseCard mx-4 rounded-4 text-white'>
            <>
                <img className='courseImg' src={pic} alt="" />
            </>
            <div className='px-5 py-3'>
                <h4 className='pb-3'>{title}</h4>
                <h5>{intro}</h5>
                <p className='text-justify'>{details.slice(0, 250)}...Read More</p>
                <Button variant="primary">Go To Course</Button>
            </div>

        </div>
    );
};

export default SingleCourse;
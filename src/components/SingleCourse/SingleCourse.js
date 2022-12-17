import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCourse.css'
const SingleCourse = ({ course }) => {
    const { course_id, title, pic, intro, details } = course;

    return (
        <div className='my-5 w-100 row courseCard rounded-4 text-white'>
            <div className='col-12 col-lg-2'>
                <img className='courseImg' src={pic} alt="" />
            </div>
            <div className='px-5 py-3 col-12 col-lg-10'>
                <h4 className='pb-3'>{title}</h4>
                <h5>{intro}</h5>
                <p className='mx-auto w-50'>{details.slice(0, 100)}...Read More</p>
                <Link to={`/courses/${course_id}`}>
                    <Button variant="primary">Go To Course</Button>
                </Link>
            </div>

        </div>
    );
};

export default SingleCourse;
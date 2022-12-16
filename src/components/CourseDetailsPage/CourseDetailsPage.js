import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseDetailsPage.css'
const CourseDetailsPage = () => {
    const courseDetail = useLoaderData();
    const { title, pic, intro, details } = courseDetail[0]
    return (
        <div className='d-flex justify-content-center flex-column'>
            <img className='imgDetailed my-5 mx-auto' src={pic} alt="" />

            <h2 className='my-4 mx-auto'>{title}</h2>

            <h4 className='my-4 mx-auto'>{intro}</h4>

            <p className='my-4 w-50 mx-auto'>{details}</p>

            <Button className='my-4 w-50 mx-auto' variant="primary">Get This Premium Course</Button>{' '}

        </div>
    );
};

export default CourseDetailsPage;
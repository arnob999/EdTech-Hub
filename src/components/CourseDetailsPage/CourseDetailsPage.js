import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetailsPage.css'
import Pdf from "react-to-pdf";

import ReactDOM from "react-dom";

const CourseDetailsPage = () => {
    const courseDetail = useLoaderData();
    const { title, pic, intro, details, course_id } = courseDetail[0];

    const ref = React.createRef();

    const options = {
        orientation: "landscape",
        unit: "in",
        format: [20, 10]
    }
    return (

        <div>
            <Pdf targetRef={ref} filename={`${title}-${intro.slice(0, 30)}.pdf`} options={options}>
                {({ toPdf }) => <button className='bg-primary rounded-3' onClick={toPdf}> Download Pdf</button>}
            </Pdf>
            <div className='d-flex justify-content-center flex-column' ref={ref}>
                <img className='imgDetailed my-5 mx-auto' src={pic} alt="" />

                <h2 className='my-4 mx-auto'>{title}</h2>

                <h4 className='my-4 mx-auto'>{intro}</h4>

                <p className='my-4 w-50 mx-auto'>{details}</p>

            </div>


            <div className='d-flex justify-content-center'>
                <Link className='mx-auto w-50' to={`/checkout/${course_id}`}>
                    <Button className='my-4 w-100' variant="primary">Get This Premium Course
                    </Button>{' '}
                </Link>
            </div>

        </div >
    );
};



export default CourseDetailsPage;
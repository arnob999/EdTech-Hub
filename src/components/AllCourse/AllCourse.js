import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourse = () => {
    const allCourse = useLoaderData();

    return (
        <div className='App'>

            {allCourse.map(course => <SingleCourse key={allCourse.course_id} course={course} ></SingleCourse>)}
        </div>
    );
};

export default AllCourse;
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, pic, intro } = course[0]
    return (
        <div className='d-flex justify-content-center'>
            <div className='mx-auto App'>
                <div className='App'>
                    <h2>CheckOut</h2>
                </div>
                <img className='w-50' src={pic} alt="" />
                <h3>{title}</h3>
                <p>
                    {intro}
                </p>

                <Button className='my-4' variant="primary">Check Out</Button>
            </div>

        </div>
    );
};

export default CheckOut;
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("https://edtech-hub-server.vercel.app/category")
            .then((res) => res.json())
            .then((data) => setCats(data))
    }, [])
    return (
        <div className='App'>
            <h3 className='fw-bolder my-4'>Category</h3>
            {cats?.map(cat => <p><Link to={`category/${cat.id}`} ><Button key={cat.id} className="btn btn-dark">{cat.name}</Button></Link></p>)
            }
        </div >
    );
};

export default LeftSideNav;
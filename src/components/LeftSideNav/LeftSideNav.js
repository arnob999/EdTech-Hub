import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then((res) => res.json())
            .then((data) => setCats(data))
    }, [])
    console.log(cats)
    return (
        <div className='App'>
            <h3 className='fw-bolder'>Category</h3>
            {cats?.map(cat => <p>{cat.name}</p>)
            }
        </div >
    );
};

export default LeftSideNav;
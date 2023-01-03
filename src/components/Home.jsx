import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory';

const Home = () => {
    const Allnews = useLoaderData();
    
    return (
        <div>
            <h5>All news category {Allnews.length} </h5>
            <p>homepage</p>
            {Allnews.map(n => {
                return <SingleCategory news={n} key={n._id}></SingleCategory>
            }) }
        </div>
    );
};

export default Home;
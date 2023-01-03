import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory';

const Category = () => {
    const newsCategory = useLoaderData();
    // console.log(newsCategory);
    return (
        <div>
                <h2>All category {newsCategory.length} </h2>            
                {
                    newsCategory.map(function(n){
                        return <SingleCategory key={n._id} news={n}></SingleCategory>
                    })
                }
        </div>
    );
};

export default Category;
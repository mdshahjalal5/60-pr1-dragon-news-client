import { async } from 'q';
import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)
    const datas = async() =>{
        const res = await fetch('http://localhost:5000/news-categories');
        const data = await res.json();
        setCategories(data);
    }
    useEffect(function(){
        datas();
    },[])
    return (
        <div>
            <h2>All categories {categories.length} </h2>
        </div>
    );
};

export default LeftSideNav;
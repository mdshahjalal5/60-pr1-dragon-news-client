import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h4>All categories {categories.length} </h4>
            {
                categories.map(function(category ){
                    return <p key={category.id}>
                        <Link >
                            {category.name}
                        </Link>
                    </p>
                })
            }

        </div>
    );
};

export default LeftSideNav;
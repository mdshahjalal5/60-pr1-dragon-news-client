import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    // console.log(categories)
    const datas = async() =>{
        const res = await fetch('https://62-clo-server.vercel.app/news-categories');
        const data = await res.json();
        setCategories(data);
    }
    useEffect(function(){
        datas();
    },[])
    return (
        <div >
            <h6>All categories {categories.length} </h6>
            {
                categories.map(function(category ){
                    return <p key={category.id}>
                        <Link to={`category/${category.id}`}>
                            {category.name}
                        </Link>
                    </p>
                })
            }

        </div>
    );
};

export default LeftSideNav;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const NewsSummary = () => {
    const navigate = useNavigate();
    const news = useLoaderData();
    const { image_url, category_id, details, title} = news;
    console.log(news)
    
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title} </Card.Title>
                <Image src={image_url} thumbnail></Image>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button onClick={()=>{
                    navigate(`/category/${category_id}`)
                }} variant="primary">All news in this category</Button>
            </Card.Body>
        </Card>
    );
};

export default NewsSummary;
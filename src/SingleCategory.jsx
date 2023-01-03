import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function SingleCategory({news}){
    // console.log(news, 'news')
    const { author, details, rating, _id
,  thumbnail_url, title, total_view} = news;

    return <>
        <Card className='mb-5'>
            <Card.Header>
                <div className='d-flex '>
                    <Image style={{ width: '80px' }} roundedCircle src={author?.img}>
                    </Image>
                    <div className='ms-2'>
                        <p className='p-0'>{author?.name} </p>
                        <p>{author?.published_date} </p>
                    </div>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title} </Card.Title>
                {/* <Card.Text>

                </Card.Text> */}
                <Card.Img src={news?.image_url}>
                    
                </Card.Img>
                {/* <Image src={news?.image_url} thumbnail> </Image> */}
                <p>{details.slice(0, 250) + '...'}  <Link to={`../news/${_id}`}>Read More</Link> </p>

            </Card.Body>
            <Card.Footer>
                THIS IS CARD FOOOTER 
            </Card.Footer>
        </Card>
    </>
}
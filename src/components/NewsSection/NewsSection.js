import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "../NewsSection/Newsection.css"

const NewsSection = () => {
    return (
        <div className='news-section '>
            <div className="container">
                <div className="news-title text-center my-5">
                    <h1>Our Latest News</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/wJ1FdKQ/slider-blog-thumb-1.jpg" />
                            <Card.Body>
                                <Card.Title>We Bring You The Best</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/jG7h4wj/slider-blog-thumb-3.jpg" />
                            <Card.Body>
                                <Card.Title>We Design Functional Items</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/NjL0gVR/slider-blog-thumb-2.jpg" />
                            <Card.Body>
                                <Card.Title>We Are Able To Satisfy Our Clients</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
import React from 'react';
import { Button } from 'react-bootstrap';
import "../Shop/Shop.css"
const Shop = () => {
    return (
        <div className='shopping '>
            <div className="container">
                <div className="shop-title mb-5">
                    <h1 className='text-center'>
                        WATCH & SHOP
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="shop-image ">
                            <img className='w-100' src="https://i.ibb.co/6t3ySsH/pexels-karolina-grabowska-4736014.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shop-details text-center ">
                            <div className="shop-detail-img ">
                                <img className='w-50' src="https://i.ibb.co/0QFJ2Jb/product-item-14-removebg-preview.png" alt="" />
                            </div>
                            <h2> EVE’S ESSENCE</h2>
                            <p>
                                Infuse your home with the most beautiful natural perfumes courtesy of Bayti's fragrant home sprays.
                                Eve's Essence is a wave of elegance that mixes citrus fruits and sandalwood with irresistible vanilla,  surprising ginger, and the trio - rode, jasmine and amber.
                            </p>
                            <Button className='btn btn-dark button'>Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
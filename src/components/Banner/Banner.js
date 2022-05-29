import React from 'react';
import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-10">
                        <div className="main-content">
                            <div className="banner-content ">
                                <h1 className='title text-white'>
                                    Best Perfume Ever
                                </h1>
                                <p className="perfume-text">Contains lower concentration of fragrance</p>
                                <p className="perfume-desp ">
                                    Glamorous, exciting, and red-carpet-ready,this perfume is more than just a scent, it’s a signature, sophisticated finishing touch. Famous actress Elizabeth Taylor firmly believed in the importance of this fragrance, and each of her 16 scents were curated carefully alongside master perfumers.
                                </p>
                                <a
                                    className="btn btn-primary px-5 py-2"
                                    href="https://perfume-bd.com/"
                                >
                                    Explore Purfumes
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Banner;
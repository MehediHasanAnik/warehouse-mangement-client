import React, { useEffect, useState } from 'react';
import Inventory from './Inventory';
import "../Inventory/Inventories.css"
import { Link } from 'react-router-dom';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch("https://guarded-chamber-28410.herokuapp.com/inventory")
            .then((res) => res.json())
            .then((data) => setInventories(data));
    }, []);
    return (
        <div id="inventories" className="">
            <div className=" container">
                <h1 className=" title text-center  py-3">
                    OUR MOST POPULAR PERFUME <br /> & COLOGNE BRANDS

                </h1>
                <div className="row">
                    {inventories.slice(0, 6).map((item) => (
                        <Inventory key={item._id} inventory={item}></Inventory>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/managePage">
                        <button className="btn btn-primary">Manage Inventories</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventories;
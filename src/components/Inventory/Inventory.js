import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
    const { _id, name, price, img, description, quantity, supplierName, sold } = inventory;

    const navigate = useNavigate();
    const serviceId = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div id="expert" className=" col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-5">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: ${price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text ">Quantity: {quantity}</p>
                    <p className="card-text">Product Sold: {sold}</p>
                    <p className="card-text">Supplier-Name {supplierName}</p>
                    <Button style={{ padding: "5px 20px", borderRadius: "5px" }} onClick={() => serviceId(_id)} className="btn btn-primary">
                        Update Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;

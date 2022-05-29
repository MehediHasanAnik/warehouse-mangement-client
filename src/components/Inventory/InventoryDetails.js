import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [updateQty, setUpdateQty] = useState(0)

    useEffect(() => {
        const url = `https://guarded-chamber-28410.herokuapp.com/inventory/${id}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInventory(data));
    }, [inventory, updateQty]);

    const handleDeliverd = (id) => {
        console.log(id);
        fetch(`https://guarded-chamber-28410.herokuapp.com/inventory/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast(data.msg);
            });
    }


    const handleQuantity = (e) => {
        e.preventDefault();
        const qty = e.target.qty.value;
        setUpdateQty(qty)
        console.log(qty);
        const dataQty = {
            quantity: qty
        }
        fetch(`https://guarded-chamber-28410.herokuapp.com/inventoryCount/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataQty),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // toast(data.msg);
            });
    }
    return (
        <div className="main-products container">
            <div className="product-details border border-2 border-primary mt-3 text-center py-3">
                <h1>Product Details</h1>
                <h3>Id: {id}</h3>
                <h4>Name: {inventory.name}</h4>
                <h4> Price: {inventory.price}</h4>
                <h4> quantity: (<span className="text-danger">{inventory.quantity}</span>)</h4>
                <h4> Sold: (<span className="text-danger">{inventory.sold}</span>)</h4>
                <h4>Suppler: {inventory.supplierName}</h4>
                <button className="btn btn-primary" onClick={() => handleDeliverd(inventory._id)} >Delivered</button>
            </div>
            <div className="deliverd-button text-center">

            </div>

            <div className="text-center m-3 border border-2 border-success p-5">
                <h3>Restock The Items</h3>
                <form onSubmit={handleQuantity} action="">
                    <input className="mt-3" type="text" name="qty" id="" placeholder="Add Quantity" /> <br />

                    <input className="mt-3" type="submit" value="Add Now" />
                </form>
            </div>



            <div className="text-center my-5">
                <Link to="/managePage">
                    <button className="btn btn-primary">Manage Inventories</button>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InventoryDetails;

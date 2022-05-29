import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ManagePage = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch("https://guarded-chamber-28410.herokuapp.com/inventory")
            .then((res) => res.json())
            .then((data) => setInventories(data));
    }, []);
    const userDeletation = id => {
        const proceed = window.confirm('r you sure?');
        console.log(id)
        if (proceed) {
            console.log('deleting', id)
            const url = `https://guarded-chamber-28410.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {

                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                    toast('Data is gone')
                });
        }

    }


    return (
        <div className='container mt-5'>
            {<Table striped bordered hover>
                <thead>
                    <tr>
                        <Link to="/addInventory">
                            <button className='btn btn-primary text-white '>Add Items</button>

                        </Link>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>Sold Product</th>
                        <th>SupplierName</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => {
                            return <tr key={inventory._id}>
                                <td>{inventory.name}</td>
                                <td>{inventory.email}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.sold}</td>
                                <td>{inventory.supplierName}</td>
                                <td> <button onClick={() => userDeletation(inventory._id)}>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>}
            <ToastContainer />
        </div>
    );
};

export default ManagePage;
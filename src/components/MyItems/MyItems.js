import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase.int';

const MyItems = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [inventories, setInventories] = useState([]);
    const getStoreToken = localStorage.getItem("token")
    const email = user?.email
    console.log(email);
    useEffect(() => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getStoreToken}`,
            },
        };
        try {
            fetch(`https://guarded-chamber-28410.herokuapp.com/inventoryItems/${email}`, config)
                .then((res) => res.json())
                .then((data) => {
                    if (data.message) {
                        signOut(auth);
                        navigate("/login");
                    } else {

                        setInventories(data)
                    }
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403) {
                toast(error.response.data.msg);
                signOut(auth);
                navigate("/login");
            }
        }

    }, [email, getStoreToken, navigate]);
    const userDeletation = id => {
        const proceed = window.confirm('Are you sure?');
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
                            <button className='btn btn-primary text-danger '>Add Items</button>

                        </Link>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>Sold Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map(inventory => {
                            return <tr key={inventory._id}>
                                <td>{inventory.name}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.sold}</td>
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

export default MyItems;
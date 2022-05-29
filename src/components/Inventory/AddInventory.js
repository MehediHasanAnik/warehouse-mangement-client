import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.int';
import "../Inventory/AddInventory.css"
const AddInventory = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://guarded-chamber-28410.herokuapp.com/inventory")
            .then((res) => res.json())
            .then((data) => setItems(data));

    }, [items]);
    const email = user?.email
    console.log(email);
    const handler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const supplierName = e.target.supplierName.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const description = e.target.description.value;

        const dataAdd = { name, email, supplierName, price, quantity, img, description };

        fetch("https://guarded-chamber-28410.herokuapp.com/inventory", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataAdd),
        })
            .then(response => response.json())
            .then(data => {
                const newUsers = [...items, data]
                setItems(newUsers)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div className="all-product">
            <div className='container '>

                <div className="form text-center">
                    <h2 className='text-center text-primary mt-4'>Add Product Here :</h2>
                    <form className='w-100' onSubmit={handler} action="">
                        <input className='m-2 w-50 p-2 ' type="text" name="name" id="" placeholder='name' /> <br />
                        <input className='m-2 w-50  p-2 ' type="text" name="supplierName" id="" placeholder='supplierName' /> <br />
                        <input className='m-2 w-50 p-2' type="number" name="price" id="" placeholder='price' /> <br />
                        <input className='m-2 w-50 p-2' type="number" name="quantity" id="" placeholder='quantity' /> <br />
                        <input className='m-2 w-50 p-2' type="text" name="img" id="" placeholder='img-Url ' /> <br />
                        <input className='m-2 w-50 p-2' type="text" name="description" id="" placeholder='Short-Description' /> <br />
                        <input className='m-2 w-50 p-2' type="submit" value="Add User" />
                    </form>
                </div>

                <div className="products">
                    <h2 className='text-center text-primary m-3'>All Products Details :</h2>
                    {<Table striped bordered hover>

                        <tbody>
                            {
                                items.map(item => {
                                    return <tr key={item._id}>
                                        <td><img src={item.img} width="80px" alt={item.name} /></td>
                                        <td>Name:{item.name}</td>
                                        <td>supplierName:{item.supplierName}</td>
                                        <td>  price:{item.price} </td>
                                        <td>quantity:{item.quantity}</td>

                                        <td>description:{item.description}</td>

                                    </tr>
                                })
                            }

                        </tbody>
                    </Table>}
                </div>
            </div>
        </div>
    );
};

export default AddInventory;
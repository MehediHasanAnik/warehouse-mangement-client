import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.int';
import '../Header/Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar className='navbar perfume_nav' expand="lg">
            <Container fluid>
                <Navbar.Brand className="title" as={Link} to="/">
                    <img className='image'
                        src={"https://i.ibb.co/PcT2QX0/logo.webp"}
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="myNavbar navbar-link "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                        <Nav.Link as={Link} to="/register">Registration</Nav.Link>
                        {user ?
                            <>
                                <Nav.Link as={Link} to="/managePage">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="/addInventory">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                <Button onClick={logout}>SignOut</Button>
                            </> :

                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
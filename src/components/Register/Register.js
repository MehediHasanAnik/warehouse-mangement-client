import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'
import { auth } from '../../firebase.int';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const emailRef = useRef("");
    const passRef = useRef("");
    const nameRef = useRef("");
    const navigate = useNavigate();

    const subForm = async (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
        e.preventDefault();
    };
    const navigateRegister = () => {
        navigate("/register");
    };
    if (user) {
        console.log('user', user)
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Form onSubmit={subForm} className="container w-50">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        ref={nameRef}
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="w-100 " variant="success" type="submit">
                    Register Now
                </Button>
                <p>
                    Already Have An Account?
                    <Link
                        to="/login"
                        className="text-danger text-decoration-none"
                        onClick={navigateRegister}
                    >
                        Please Login Here
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;
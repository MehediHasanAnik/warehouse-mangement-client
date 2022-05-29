import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { auth } from "../../firebase.int";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passRef = useRef("");

    const subForm = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password)
        fetch("https://guarded-chamber-28410.herokuapp.com/logintoken", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("token", data.accessToken)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    let from = location.state?.from?.pathname || "/";
    const navigateRegister = () => {
        navigate("/register");
    };
    if (user) {
        navigate(from, { replace: true });
    }
    if (error?.message) {
        toast("User Not Found");
    }

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent To Your Address");
        } else {
            toast("Please Enter Your Email Address");
        }
    }
    return (
        <div>
            <Form onSubmit={subForm} className="container w-50">
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
                <Button className="w-100 " variant="primary" type="submit">
                    Log In
                </Button>
                <p className="mt-3">
                    New here?{" "}
                    <Link
                        to="/register"
                        className="text-danger text-decoration-none"
                        onClick={navigateRegister}
                    >
                        Please Register Here.
                    </Link>
                </p>
                <p>
                    <span className=""> Forget Your Password?</span>
                    <Button onClick={passwordReset}
                        className="btn btn-link text-white text-decoration-none "

                    >
                        Reset Password
                    </Button>
                </p>
            </Form>
            <div className='text-center'>
                <button className='btn btn-primary m-2' onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
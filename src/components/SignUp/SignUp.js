import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)



    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            display: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }


    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL)
                handleVerifyEmail();

                toast.success("Please check your email for verification code");
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });
    }

    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='my-5 w-25 d-flex justify-content-center flex-column'>
                <div>
                    <h2 className='my-3'>Sign Up To EdTech Hub</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            onClick={handleAccepted}
                            label={<>
                                Accept
                                <Link to='/terms'>Accept Terms & Condition</Link>
                            </>} />
                    </Form.Group>
                    <Button disabled={!accepted} variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <>

                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </>
                    <p className='my-3'>
                        Already Have an Account on EdTech Hub?
                        <Link to={"/signin"}>
                            Please Login
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;
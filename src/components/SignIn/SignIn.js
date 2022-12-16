import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoading, providerLogin, gitHubSignIN } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const provider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {
        providerLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError(true);
            })
            .catch((error) => console.error(error.message));
    }

    const handleGithubLogin = () => {
        gitHubSignIN()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError(true);
            })
            .catch((error) => console.error(error.message));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }

                else {
                    toast.error("Please Verify Your Email First")
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='d-flex justify-content-center'>

            <div className='my-5 w-25 d-flex justify-content-center flex-column'>
                <div>
                    <h2 className='my-3'>Login</h2>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <p className='text-muted App my-3'>Other Login Method</p>
                    <div className='d-flex flex-column'>
                        <Button onClick={handleGoogleLogin} className="my-2" variant="primary">Login With Google</Button>

                        <Button onClick={handleGithubLogin} className="my-2" variant="primary">Login With Github</Button>
                    </div>
                    <p className='my-3'>New to EdTech Hub? Please <Link to={"/signup"}>SignUp</Link></p>
                </Form>
            </div>

        </div>
    );
};

export default Login;
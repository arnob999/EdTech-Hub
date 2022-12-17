import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider.js';
import { Button, Image } from 'react-bootstrap';

function Header() {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/'>
                    <img className='brandLogo' src='https://i0.wp.com/edtechhub.org/wp-content/uploads/2020/09/EdTechHub-Logo.png?fit=519%2C129&ssl=1'></img>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none p-2 fw-bold text-dark' to="/">Home</Link>
                        <Link className='text-decoration-none p-2 fw-bold text-dark' to="courses">Courses</Link>
                        <Link className='text-decoration-none p-2 fw-bold text-dark' to="blog">Blogs</Link>
                    </Nav>
                    <Nav>
                        <div>
                            {
                                user?.uid ?
                                    <><Button className='text-decoration-none mx-1' variant="primary" onClick={handleLogOut}>Log out</Button>
                                        <span className='text-dark fw-bold m-0 p-0'>{user?.displayName}</span>

                                    </>
                                    :
                                    <div className='ms-3'>
                                        <Link className='text-decoration-none  px-1 text-dark fw-bold' to='/signin'>Login</Link>
                                        <Link className='text-decoration-none px-1 text-dark fw-bold' to='/signup'>SignUp</Link>
                                    </div>
                            }


                        </div>
                        <div>

                            <Link to="/profile">
                                {user?.photoURL &&
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                }
                            </Link>
                        </div>
                    </Nav>
                    <Form className='ms-lg-3'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
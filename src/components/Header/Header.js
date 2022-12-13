import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Header.css'

function Header() {
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

                        <>
                            <Link className='text-decoration-none p-2 ms-lg-4 fw-bold text-dark' to="signin">SignIn</Link>

                            <Link className='text-decoration-none p-2 fw-bold text-dark' to="signup">SignUp</Link>
                        </>
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
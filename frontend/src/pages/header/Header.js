import Navbar from "react-bootstrap/Navbar";
import container from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/">
                    <strong>EduBridge Network</strong>
                    </Navbar.Brand>
                    <Nav className='ml-auto'>
                    <Nav.Link as={Link} to="/" className="nav-link">Members</Nav.Link>
                    <Nav.Link as={Link} to="/templates" className="nav-link">Personal Templates</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NabBar.css'

function NabBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className='justify-content-between'>
        <div className='d-flex justify-content-center w-100'>
        <Navbar.Brand href="#home" className='navbar-brand custom-font'>EduBridge</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-link custom-font'>Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='nav-dropdown custom-font'>
              <NavDropdown.Item href="#signin" className='dropdown-item custom-font'>START</NavDropdown.Item>
              <NavDropdown.Item href="#publicTemp" className='dropdown-item custom-font'>
                Public Templates
              </NavDropdown.Item>
              <NavDropdown.Item href="#privateTemp" className='dropdown-item custom-font'>Private Templates</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#message" className='dropdown-item custom-font'>
                Message
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NabBar;
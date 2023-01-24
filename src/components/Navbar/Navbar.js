import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';

function MyNav() {
  return (
    <>



<Navbar className='nav-bar' expand="lg">
      <Container>
        <Navbar.Toggle style={{width: "5rem", height:"5rem"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link className='nav-item home-nav' to={'/bjj-website'}>Home</Link>
            <NavDropdown className='nav-item' title="Start Learning" id="basic-nav-dropdown">
              <Link className='nav-item drop-down-item' to={'/Classes'}>Classes</Link>
              <Link className='nav-item drop-down-item' to={'/Schedule'}>Schedule</Link>
            </NavDropdown>
            <NavDropdown className='nav-item' title="About Us" id="basic-nav-dropdown">
              <Link className='nav-item drop-down-item' to={'/Instructor'}>Instructor</Link>
              <Link className='nav-item drop-down-item' to={'/Reviews'}>Reviews</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
  );
}

export default MyNav;
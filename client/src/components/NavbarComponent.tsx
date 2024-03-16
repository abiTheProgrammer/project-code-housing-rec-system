import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavbarComponent.css'; 

const NavbarComponent: React.FC = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Nav className="nav-link-container"> {/* Align items to the center */}
                    <Nav.Link href="#" className="nav-link">Link</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

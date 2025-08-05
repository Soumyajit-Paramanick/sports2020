import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-1">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Cricket Shop Logo"
            style={{
              height: '55px',
              objectFit: 'contain',
              paddingTop: '2px',
              paddingBottom: '2px'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="bg-dark">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/products">🛒 All Products</Nav.Link>
            <Nav.Link as={Link} to="/about">ℹ️ About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">📞 Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .navbar-dark .navbar-nav .nav-link {
          color: white;
        }
        .navbar-dark .navbar-nav .nav-link:hover {
          color: #25d366;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #000;
            padding: 1rem;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default Navigation;




























// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ height: '70px' }}>
//       <Container>
//         <Navbar.Brand as={Link} to="/" style={{ height: '100%' }}>
//           <img
//             src="/logo.png"
//             alt="Cricket Shop Logo"
//             style={{ height: '100%', maxHeight: '80px', objectFit: 'contain' }}
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">🏠 Home</Nav.Link>
//             <Nav.Link as={Link} to="/products">🛒 All Products</Nav.Link>
//             <Nav.Link as={Link} to="/about">ℹ️ About Us</Nav.Link>
//             <Nav.Link as={Link} to="/contact">📞 Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navigation;


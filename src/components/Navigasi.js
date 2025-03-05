import {Navbar,Container,Nav} from 'react-bootstrap'

const Navigasi = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" variant='dark'>
    <Container>
      <Navbar.Brand href="#Suko">SUKOHARJO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Wisata">Wisata</Nav.Link>
          <Nav.Link href="#Kuliner">Kuliner</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navigasi
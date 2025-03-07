import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tabs = () => (
  <Nav variant="tabs" className="justify-content-center">
    <Nav.Item>
      <Nav.Link as={Link} to="/teacher-dashboard">Your Current Classes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/your-classes">Your Classes</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Tabs;

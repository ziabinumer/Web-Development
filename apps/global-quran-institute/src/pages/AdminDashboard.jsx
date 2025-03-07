import { Container, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import AllClasses from './AllClasses';
import AddClass from './AddClass';
import Teachers from './Teachers';

const AdminDashboard = () => (
  <Container>
    <h2>Admin Panel</h2>
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/all-classes">All Classes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/add-class">Add Class</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
      </Nav.Item>
    </Nav>

    <Routes>
      <Route path="all-classes" element={<AllClasses />} />
      <Route path="add-class" element={<AddClass />} />
      <Route path="teachers" element={<Teachers />} />
    </Routes>
  </Container>
);

export default AdminDashboard;

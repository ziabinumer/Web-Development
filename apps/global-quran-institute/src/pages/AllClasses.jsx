// AllClasses.jsx
import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { getAllClasses, deleteClass } from '../services/classService';


const AllClasses = () => {
    const [classes, setClasses] = useState([]);
  
    useEffect(() => {
      getAllClasses().then(setClasses);
    }, []);
  
    const handleDelete = async (id) => {
      await deleteClass(id);
      setClasses(classes.filter(cls => cls.id !== id));
    };
  
    return (
      <Container>
        <h2>All Classes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Teacher</th>
              <th>Timing</th>
              <th>Meeting Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls.id}>
                <td>{cls.studentName}</td>
                <td>{cls.teacherId}</td>
                <td>{cls.startTime} - {cls.endTime}</td>
                <td><a href={cls.meetingLink} target="_blank" rel="noopener noreferrer">Join</a></td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(cls.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  };

  export default AllClasses;
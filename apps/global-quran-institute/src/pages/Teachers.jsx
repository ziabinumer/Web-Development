// Teachers.jsx
import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { getAllTeachers, addTeacher } from '../services/teacherService';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [newTeacher, setNewTeacher] = useState('');
  
    useEffect(() => {
      getAllTeachers().then(setTeachers);
    }, []);
  
    const handleAddTeacher = async () => {
      if (newTeacher) {
        const addedTeacher = await addTeacher({ name: newTeacher });
        setTeachers([...teachers, addedTeacher]);
        setNewTeacher('');
      }
    };
  
    return (
      <Container>
        <h2>Teachers</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <input type="text" value={newTeacher} onChange={(e) => setNewTeacher(e.target.value)} placeholder="New Teacher Name" />
        <Button onClick={handleAddTeacher} className="mt-2">Add Teacher</Button>
      </Container>
    );
  };

  export default Teachers;
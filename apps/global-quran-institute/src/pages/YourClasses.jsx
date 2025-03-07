// YourClasses.jsx
import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getTeacherClasses } from '../services/classService';


export const YourClasses = ({ teacherId }) => {
    const [classes, setClasses] = useState([]);
  
    useEffect(() => {
      if (teacherId) {
        getTeacherClasses(teacherId).then(setClasses);
      }
    }, [teacherId]);
  
    return (
      <Container>
        <h2>Your Classes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Timing</th>
              <th>Meeting Link</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls.id}>
                <td>{cls.studentName}</td>
                <td>{cls.startTime} - {cls.endTime}</td>
                <td><a href={cls.meetingLink} target="_blank" rel="noopener noreferrer">Join</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  };
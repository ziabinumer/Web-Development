import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getAllTeachers } from '../services/teacherService';

const TeacherDropdown = ({ selectedTeacher, onChange }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeachers().then(setTeachers);
  }, []);

  return (
    <Form.Group>
      <Form.Label>Teacher</Form.Label>
      <Form.Select value={selectedTeacher} onChange={onChange} required>
        <option value="">Select Teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default TeacherDropdown;

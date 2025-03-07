import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { addClass } from '../services/classService';
import { getAllTeachers } from '../services/teacherService';

const AddClass = () => {
  const [studentName, setStudentName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeachers().then(setTeachers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addClass({ studentName, teacherId, startTime, endTime, meetingLink });
  };

  return (
    <Container>
      <h3>Add Class</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Student Name</Form.Label>
          <Form.Control value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Teacher</Form.Label>
          <Form.Select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} required>
            <option value="">Select Teacher</option>
            {teachers.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>End Time</Form.Label>
          <Form.Control type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Meeting Link</Form.Label>
          <Form.Control value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Add Class</Button>
      </Form>
    </Container>
  );
};

export default AddClass;

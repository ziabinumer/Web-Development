import { Card, Button } from 'react-bootstrap';

const ClassCard = (cls) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{cls.studentName}</Card.Title>
      <Card.Text>Duration: {cls.startTime + "-" + cls.endTime} minutes</Card.Text>
      <Button variant="primary" href={cls.meetingLink} target="_blank">Open Meeting</Button>
    </Card.Body>
  </Card>
);

export default ClassCard;

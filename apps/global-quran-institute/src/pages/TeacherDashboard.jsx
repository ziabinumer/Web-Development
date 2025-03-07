import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ClassCard from '../components/ClassCard';
import { getCurrentClasses } from '../services/classService';

const isWithinCurrentHour = (startTime, endTime) => {
    const now = new Date();
    
    // Get current time in "HH:MM:SS" format
    const currentTime = now.toTimeString().split(' ')[0]; // Extract HH:MM:SS from full time
    
    // Check if current time is between startTime and endTime
    return currentTime >= startTime && currentTime <= endTime;
};
  
const add = (cls) => {
    if (isWithinCurrentHour(cls.startTime, cls.endTime)) {
        return true;
    }
    return false;
}

const TeacherDashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getCurrentClasses(localStorage.getItem("teacherId")).then(setClasses);
  }, []);

  return (
    <Container>
      <h2>Your Current Classes</h2>
      
      
      
      {classes.filter(add).map((cls) => (
        <ClassCard key={cls.id} {...cls} />
      ))}
    </Container>
  );
};

export default TeacherDashboard;

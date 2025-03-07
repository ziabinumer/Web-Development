import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTeacherByName } from "../services/teacherService";
import { Container, Form, Button, Spinner } from "react-bootstrap";

const TeacherSetup = () => {
  const [teacherName, setTeacherName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if teacherId & teacherName already exist in local storage
    const storedTeacherId = localStorage.getItem("teacherId");
    const storedTeacherName = localStorage.getItem("teacherName");

    if (storedTeacherId && storedTeacherName) {
      console.log("Teacher already set:", storedTeacherName);
      navigate("/dashboard"); // Redirect to dashboard if already set
    }
  }, [navigate]);

  const handleSaveTeacher = async () => {
    if (!teacherName.trim()) {
      alert("Please enter a valid name.");
      return;
    }

    setLoading(true);

    try {
      const teacher = await getTeacherByName(teacherName);

      if (!teacher) {
        alert("Teacher not found. Please check the name or contact support.");
        setLoading(false);
        return;
      }

      // Store in local storage
      localStorage.setItem("teacherId", teacher.id);
      localStorage.setItem("teacherName", teacher.name);

      console.log("Teacher saved successfully:", teacher);

      // ✅ Redirect to dashboard after ID is successfully stored
      navigate("/dashboard");
    } catch (error) {
      console.error("Error fetching teacher:", error);
      alert("Error fetching teacher data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Teacher Setup</h2>
      <p>Please enter your name to continue.</p>
      <Form>
        <Form.Group controlId="teacherName">
          <Form.Label>Teacher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="mt-3"
          onClick={handleSaveTeacher}
          disabled={loading}
        >
          {loading ? <Spinner size="sm" animation="border" /> : "Continue"}
        </Button>
      </Form>
    </Container>
  );
};

export default TeacherSetup;

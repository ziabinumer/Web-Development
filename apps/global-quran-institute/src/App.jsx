import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FirebaseProvider } from './context/FirebaseContext';
import  AllClasses   from './pages/AllClasses';
import { YourClasses }  from './pages/YourClasses';
import  Teachers  from './pages/Teachers';
import  AddClass  from './pages/AddClass';
import  TeacherDashboard  from './pages/TeacherDashboard';
import  AdminDashboard  from './pages/AdminDashboard';
import TeacherSetup from "./components/TeacherSetup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TeacherSetup />} />
          <Route path="/dashboard" element={<TeacherDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/all-classes" element={<AllClasses />} />
          <Route path="/your-classes" element={<YourClasses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/add-class" element={<AddClass />} />
        </Routes>
      </Router>
    </FirebaseProvider>
  );
}

export default App;

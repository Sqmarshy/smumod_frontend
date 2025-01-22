import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Timetable from "./pages/Timetable";
import Courses from './pages/Courses';
import Setting from './pages/Setting';
import Venue from './pages/Venue';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/" element={<Navigate to="/timetable" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App
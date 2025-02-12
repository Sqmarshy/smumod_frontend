import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Timetable from "./pages/Timetable";
import Modules from './pages/Modules';
import Setting from './pages/Setting';
import Venue from './pages/Venue';
import Header from "./components/Header";
import LoginPage from './pages/LoginPage';
import AuthLayout from './layouts/Authlayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/deploy-proto" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Main app routes */}
        <Route
          element={
            <div className="app">
              <Header />
              <div className="app-container">
                <Sidebar />
                <main className="main-content">
                  <Outlet />  {/* Add this line */}
                </main>
              </div>
            </div>
          }
        >
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
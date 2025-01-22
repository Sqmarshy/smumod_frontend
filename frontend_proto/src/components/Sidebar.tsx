import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const menuItems = [
  { icon: "img", label: "Timetable", path: "/timetable" },
  { icon: "img", label: "Courses", path: "/courses" },
  { icon: "img", label: "Venue", path: "/venue" },
  { icon: "img", label: "Setting", path: "/setting" },
];
function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname.substring(1) || 'timetable';

  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map(item => (
          <Link 
            key={item.label} 
            to={item.path} 
            className={`sidebar-item ${currentPath === item.label.toLowerCase() ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar
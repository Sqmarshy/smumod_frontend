import { useState } from 'react';

function Sidebar() {
    const [activeItem, setActiveItem] = useState('');
    
    const menuItems = [
      { icon: "img", label: "Timetable" },
      { icon: "img", label: "Courses" },
      { icon: "img", label: "Venues" },
      { icon: "img", label: "Settings" },
    ];
  
    return (
      <aside className="w-64 bg-white border-r">
        <nav className="flex flex-col">
          {menuItems.map(item => (
            <a 
              key={item.label} 
              className={`sidebar-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    );
};

export default Sidebar;
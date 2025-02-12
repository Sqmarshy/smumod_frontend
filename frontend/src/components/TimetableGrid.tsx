import React from 'react';
import '../styles/TimetableGrid.css';

function TimetableGrid(){
    const timeSlots = Array.from({ length: 8 }, (_, i) => 1000 + i * 100);
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  
    return (
      <div className="timetable-container">
        <div className="timetable-grid">
          <div className="empty-cell" />
          {timeSlots.map(time => (
            <div key={time} className="time-slot">
              {time}
            </div>
          ))}
          
          {days.map(day => (
            <React.Fragment key={day}>
              <div className="day-label">{day}</div>
              {timeSlots.map(time => (
                <div key={`${day}-${time}`} className="grid-cell" />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
}

export default TimetableGrid;
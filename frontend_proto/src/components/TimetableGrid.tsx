import React from 'react';

function TimetableGrid(){
    const timeSlots = Array.from({ length: 8 }, (_, i) => 1000 + i * 100);
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  
    return (
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-[auto_repeat(8,1fr)] gap-px bg-gray-200 min-w-full border-b border-gray-200">
          <div className="bg-white" />
          {timeSlots.map(time => (
            <div key={time} className="bg-white p-2 text-center text-sm">
              {time}
            </div>
          ))}
          
          {days.map(day => (
            <React.Fragment key={day}>
              <div className="bg-white p-2 text-sm font-medium">{day}</div>
              {timeSlots.map(time => (
                <div key={`${day}-${time}`} className="bg-white h-16" />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

export default TimetableGrid
import '../styles/TimetableHeader.css';

function TimetableHeader(){
    return (
      <div className="timetable-header">
        <button className="nav-button">&lt;</button>
        <h2 className="term-title">January Term 2025</h2>
        <button className="nav-button">&gt;</button>
      </div>
    );
};

export default TimetableHeader;
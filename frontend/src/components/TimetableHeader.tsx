import '../styles/TimetableHeader.css';
import PrintButton from './PrintButton';

function TimetableHeader(){
    console.log("TimetableHeader rendered"); 
    return (
      <div className="timetable-header">
        <button className="nav-button">&lt;</button>
        <h2 className="term-title">January Term 2025</h2>
        <button className="nav-button">&gt;</button>
        <PrintButton /> 
      </div>
    );
};

export default TimetableHeader;
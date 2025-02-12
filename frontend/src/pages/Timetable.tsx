import TimetableGrid from '../components/TimetableGrid';
import TimetableHeader from '../components/TimetableHeader';
import CourseList from '../components/CourseList';
import '../styles/Timetable.css';

function Timetable(){
  return (
    <div className="timetable-container">
      <main className="timetable-main">
        <TimetableHeader />
        <TimetableGrid />
        <CourseList />
      </main>
    </div>
  );
};

export default Timetable;
import '../styles/CourseCard.css'

interface CourseProps {
    code: string;
    title: string;
    units: number;
    hasExam: boolean;
  }

function CourseCard({ code, title, units, hasExam }: CourseProps) {
    return (
      <div className="course-card">
        <div className="course-info">
          <span className="course-code">{code}</span>
          <span className="course-title">{title}</span>
          <div className="course-details">
            <span>{hasExam ? 'Has Exam' : 'No Exam'}</span>
            <span>{units} Units</span>
          </div>
        </div>
        <div className="course-actions">
          <button className="action-btn">📋</button>
          <button className="action-btn">🔗</button>
        </div>
      </div>
    );
  };

export default CourseCard
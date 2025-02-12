import '../styles/CourseCard.css'
import { Module } from '../module_data';

interface CourseCardProps extends Pick<Module, 'moduleCode' | 'moduleName' | 'creditUnits' | 'hasExam'> {
  onRemove?: () => void;
  isSelected?: boolean;}
  
  function CourseCard({ moduleCode, moduleName, creditUnits, hasExam, onRemove, isSelected }: CourseCardProps) {
    return (
      <div className="course-card">
        <div className="course-info">
          <span className="course-code">{moduleCode}</span>
          <span className="course-title">{moduleName}</span>
          <div className="course-details">
            <span>{hasExam ? 'Has Exam' : 'No Exam'}</span>
            <span>{creditUnits} Units</span>
          </div>
        </div>
        <div className="course-actions">
        {isSelected ? (
          <button 
            className="action-btn remove-btn" 
            onClick={onRemove}
            aria-label="Remove course"
          >
            ✕
          </button>
        ) : (
          <>
            <button className="action-btn">📋</button>
            <button className="action-btn">🔗</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseCard 


import { useState } from 'react';
import CourseCard from "./CourseCard";
import SearchBar from "./Searchbar";
import { Module } from '../module_data';
import '../styles/CourseList.css'


function CourseList() {
  const [selectedCourses, setSelectedCourses] = useState<Module[]>([]);

  const handleAddCourse = (course: Module) => {
    if (!selectedCourses.find(c => c.moduleCode === course.moduleCode)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleRemoveCourse = (moduleCode: string) => {
    setSelectedCourses(selectedCourses.filter(course => 
      course.moduleCode !== moduleCode
    ));
  };

  return (
    <div className="course-container">
      <SearchBar onCourseSelect={handleAddCourse} />
      <div className="course-list">
        {/* Display selected courses */}
        {selectedCourses.map(course => (
          <CourseCard 
            key={course.moduleCode}
            {...course}
            onRemove={() => handleRemoveCourse(course.moduleCode)}
            isSelected={true}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
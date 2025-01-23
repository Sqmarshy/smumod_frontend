import CourseCard from "./CourseCard";
import SearchBar from "./Searchbar";


function CourseList(){
    const courses = [
      {
        code: 'CS602',
        title: 'Algorithm design and Implementation',
        units: 1,
        hasExam: true
      },
    ];
  
    return (
      <div className="course-container">
        <SearchBar />
        <div className="course-list">
          {courses.map(course => (
            <CourseCard key={course.code} {...course} />
          ))}
        </div>
      </div>
    );
  };
  
export default CourseList
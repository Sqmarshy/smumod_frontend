import CourseCard from "./CourseCard";
import SearchBar from "./Searchbar";
import '../styles/CourseList.css'


function CourseList(){
    const courses = [
      {
        code: 'CS602',
        title: 'Algorithm design and Implementation',
        units: 1,
        hasExam: true
      },
      {
        code: 'CS606',
        title: 'AI PLanning and Optimization',
        units: 1,
        hasExam: true
      },
      {
        code: "CS610",
        title: "Machine Learning Fundamentals",
        units: 1,
        hasExam: true
      },
      {
        code: "CS615",
        title: "Big Data Analytics",
        units: 1,
        hasExam: true
      },
      {
        code: "CS620",
        title: "Cybersecurity and Ethical Hacking",
        units: 1,
        hasExam: false
      },
      {
        code: "CS625",
        title: "Natural Language Processing",
        units: 1,
        hasExam: true
      },
      {
        code: "CS630",
        title: "Advanced Database Systems",
        units: 1,
        hasExam: false
      }
      
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
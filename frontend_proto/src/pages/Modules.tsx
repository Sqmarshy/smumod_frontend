import SearchBar from '../components/Searchbar';
import ModuleCard from '../components/ModuleCard';
import '../styles/Modules.css';

const Modules = () => {
  const sampleModules = [
    {
      moduleCode: "CS602",
      moduleName: "Algorithm Design & Implementation",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language.",
      prerequisites: ["CS000", "IS000"]
    },
    {
      moduleCode: "CS606",
      moduleName: "AI Planning and Optimization",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language.",
      prerequisites: ["CS000", "IS000"]
    },
    {
      moduleCode: "CS610",
      moduleName: "Machine Learning Fundamentals",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module covers the basics of machine learning, including supervised and unsupervised learning techniques, and their applications.",
      prerequisites: ["CS602", "MA201"]
    },
    {
      moduleCode: "CS615",
      moduleName: "Big Data Analytics",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module introduces techniques for processing and analyzing large datasets using modern big data tools and frameworks.",
      prerequisites: ["CS606", "ST101"]
    },
    {
      moduleCode: "CS620",
      moduleName: "Cybersecurity and Ethical Hacking",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module explores cybersecurity principles, threat analysis, and ethical hacking techniques to secure systems and networks.",
      prerequisites: ["CS602", "IS202"]
    },
    {
      moduleCode: "CS625",
      moduleName: "Natural Language Processing",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module focuses on computational techniques for processing and understanding human language using AI methods.",
      prerequisites: ["CS610", "CS606"]
    },
    {
      moduleCode: "CS630",
      moduleName: "Advanced Database Systems",
      school: "School of Computing",
      creditUnits: 1,
      description: "This module delves into advanced topics in database systems, including distributed databases, indexing, and query optimization.",
      prerequisites: ["CS602", "DB200"]
    }
  ];

  return (
    <div className="modules-page">
      <SearchBar />
      <div className="modules-grid">
        {sampleModules.map((module) => (
          <ModuleCard
            key={module.moduleCode}
            {...module}
          />
        ))}
      </div>
    </div>
  );
};

export default Modules;
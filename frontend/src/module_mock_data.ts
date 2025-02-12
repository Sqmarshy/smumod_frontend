import type { Module } from "./module_data";

export const mockModules: Module[] = [ 
  {
    moduleCode: "CS602",
    moduleName: "Algorithm Design & Implementation",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language.",
    prerequisites: [],
    hasExam: true
  },
  {
    moduleCode: "CS606",
    moduleName: "AI Planning and Optimization",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language.",
    prerequisites: ["CS000", "IS000"],
    hasExam: false
  },
  {
    moduleCode: "CS610",
    moduleName: "Machine Learning Fundamentals",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module covers the basics of machine learning, including supervised and unsupervised learning techniques, and their applications.",
    prerequisites: ["CS602", "MA201"],
    hasExam: false

  },
  {
    moduleCode: "CS615",
    moduleName: "Big Data Analytics",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module introduces techniques for processing and analyzing large datasets using modern big data tools and frameworks.",
    prerequisites: ["CS606", "ST101"],
    hasExam: true

  },
  {
    moduleCode: "CS620",
    moduleName: "Cybersecurity and Ethical Hacking",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module explores cybersecurity principles, threat analysis, and ethical hacking techniques to secure systems and networks.",
    prerequisites: ["CS602", "IS202"],
    hasExam: false

  },
  {
    moduleCode: "CS625",
    moduleName: "Natural Language Processing",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module focuses on computational techniques for processing and understanding human language using AI methods.",
    prerequisites: ["CS610", "CS606"],
    hasExam: true
  },
  {
    moduleCode: "CS630",
    moduleName: "Advanced Database Systems",
    school: "School of Computing",
    creditUnits: 1,
    description: "This module delves into advanced topics in database systems, including distributed databases, indexing, and query optimization.",
    prerequisites: ["CS602", "DB200"],
    hasExam: true

  }
];
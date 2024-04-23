const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  //   Problem 10 - CountCalculation
function countCalculation(school) {
    const {
      departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount },
      },
    } = school;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }

  console.log(countCalculation(school));


  //   Problem 11 - FindTop Student
function findTopStudent(school, courseName){
    const {students} = school;

    let topStudent = students[0]

    students.forEach(student =>{
        if (student.scores[courseName] > topStudent.scores[courseName]) {
          topStudent = student;
        }
      });
    return topStudent;
}
console.log(findTopStudent(school, "math"))


// Problem 12 : addNew Dept

function addNewDept(school, newDepartment){
    const updatedDept = {...school.departments, ...newDepartment}

    return {
        ...school,
         departments: updatedDept
    }
}
const newDepartment ={ art: {teachers: 2, students:50}}

console.log(addNewDept(school, newDepartment))


// problem 13 - highestStudentCountDepartment

function highestStudentCountDepartment(school) {
    let maxCount = 0;
    let maxDept = "";

    for (const dept in school.departments) {
        if(school.departments[dept].students > maxCount){
            maxCount = school.departments[dept].students;
            maxDept = dept;
        }
    }
    return maxDept;
}
console.log(highestStudentCountDepartment(school))

//  Problem 14 - Greeting Message
function generateGreeting(name, language = 'English') {
    const greetings = {
      English: `Hello, ${name}!`,
      Spanish: `¡Hola, ${name}!`,
      French: `Bonjour, ${name}!`,
    };
    return greetings[language] || `Hello, ${name}!`;
  }

  console.log(generateGreeting("Alice"));
  console.log(generateGreeting("Bob", "Spanish"));
  console.log(generateGreeting("Charlie", "French"));

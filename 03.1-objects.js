const student = {
  name : "Alice",
  age : 20,
  isEnrolled : true,
  courses : ["Math", "Science", "Art"],
}

// Accessing object properties
console.log(student.name);        // Output: Alice
console.log(student['age']);      // Output: 20 
console.log(student.courses[1]); // Output: Science

// Modifying object properties
student.age =+ 2;               // Increment age by 2

// Adding a new property
student.grade = "A";            // Add new property 'grade'

//deleting a property
delete student.isEnrolled;      // Remove 'isEnrolled' property
console.log(student);

// Iterating over object properties
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
  // outputs:
  // name: Alice
  // age: 22
  // courses: Math,Science,Art
  // grade: A
}

// Checking if a property exists
console.log('name' in student);        // Output: true
console.log(student.hasOwnProperty('age')); // Output: true
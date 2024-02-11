function showYoungestStudent(students) {
    if (students.length === 0) {
        console.log('No students provided.');
        return;
    }

    const youngestStudent = students.reduce((youngest, student) => {
        return student.age < youngest.age ? student : youngest;
    }, students[0]);

    console.log(youngestStudent.name);
}

module.exports = showYoungestStudent;


module.exports = showYoungestStudent;
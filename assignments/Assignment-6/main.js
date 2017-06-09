var allStudents = [];
var allCourses = [];

var makeStudent = function(r, nm, yr) {
    var student = {};
    var roll = r;
    var name = nm;
    var year = yr;
    var courses = [];

    /* Add the methods here*/
    student.getCourseIds = function() {
        return courses;
    }

    student.addCourse = function(id) {
        courses.push(id);
    }

    student.dropCourse = function(id) {
        courses.splice(courses.indexOf(id), 1);
    }

    student.findCourse = function(id) {
            if (courses.indexOf(id) != -1) {
                return true;
            } else {
                return false;
            }
        }
        /* You may add any additional methods that you need */

    student.getRoll = function() {
        return roll;
    }

    student.getName = function() {
        return name;
    }

    student.getYear = function() {
        return year;
    }

    return student;
}

var makeCourse = function(i, nm) {
    var course = {}
    var id = i;
    var name = nm;
    var students = [];

    /* Add the methods here*/
    course.getStudents = function() {
        return students;
    }

    course.addStudent = function(roll) {
        students.push(roll);
    }

    course.dropStudent = function(roll) {
        students.splice(students.indexOf(roll), 1);
    }

    course.findStudent = function(roll) {
            if (students.indexOf(roll) != -1) {
                return true;
            } else {
                return false;
            }
        }
        /* You may add any additional methods that you need */
    course.getId = function() {
        return id;
    }

    course.getName = function() {
        return name;
    }

    return course;
}

var addNewStudent = function() {
    //console.log("Working1");
    var nm = document.getElementById("addNewStudent").name.value;
    var roll = document.getElementById("addNewStudent").roll.value;
    var yr = document.getElementById("addNewStudent").year.value;
    if (roll < 20110000 || roll > 20169999 || !nm.match(/^[a-zA-Z]+$/) || !yr.match(/^[U][G][1-6]$/)) {
        alert("You entered a wrong input!!");
        return;
    }
    //console.log("Working2");
    var stu = makeStudent(nm, roll, yr);
    allStudents.push(stu);

    var studentTable = document.getElementById("allStudents");
    var last = allStudents.length - 1;
    //console.log(last);
    //console.log("Working3");

    var row = studentTable.insertRow(allStudents.length);
    var roll = row.insertCell(0);
    var name = row.insertCell(1);
    var year = row.insertCell(2);
    //console.log("Working4");

    roll.innerHTML = allStudents[last].getRoll();
    name.innerHTML = allStudents[last].getName();
    year.innerHTML = allStudents[last].getYear();
    //console.log("Working5");

    var dropdown = document.getElementById("ddStudents");
    var opt = document.createElement("OPTION");
    opt.value = stu.getRoll();
    opt.text = stu.getRoll();
    dropdown.options.add(opt);

    var dropRemove = document.getElementById("studentRemove");
    var opt = document.createElement("OPTION");
    opt.value = stu.getRoll();
    opt.text = stu.getRoll();
    dropRemove.options.add(opt);

    var dropEnroll = document.getElementById("courseTaken");
    var opt = document.createElement("OPTION");
    opt.value = stu.getRoll();
    opt.text = stu.getRoll();
    dropEnroll.options.add(opt);

    alert("Student Added");
}

var addNewCourse = function() {
    var id = document.getElementById("addNewCourse").id.value;
    var nm = document.getElementById("addNewCourse").name.value;
    if (!id.match(/^[A-Z]{3}[0-9]{3}$/) || !nm.match(/^[A-Za-z]+$/)) {
        alert("You entered a wrong input!!");
        return;
    }
    var course = makeCourse(id, nm);
    allCourses.push(course);

    var courseTable = document.getElementById("allCourses");
    var last = allCourses.length - 1;

    var row = courseTable.insertRow(allCourses.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);

    id.innerHTML = allCourses[last].getId();
    name.innerHTML = allCourses[last].getName();

    var dropdown = document.getElementById("ddCourses");
    var opt = document.createElement("OPTION");
    opt.value = course.getId();
    opt.text = course.getId();
    dropdown.options.add(opt);

    var dropRemove = document.getElementById("courseRemove");
    var opt = document.createElement("OPTION");
    opt.value = course.getId();
    opt.text = course.getId();
    dropRemove.options.add(opt);

    var dropEnroll = document.getElementById("studentEnroll");
    var opt = document.createElement("OPTION");
    opt.value = course.getId();
    opt.text = course.getId();
    dropEnroll.options.add(opt);

    alert("Course Added");
}

var studentHelper = function(Student) {
    if (Student === "") {
        return -1;
    }
    var temp;
    for (var i = 0; i < allStudents.length; i++) {
        if (allStudents[i].getRoll() === Student) {
            temp = allStudents[i];
        }
    }
    return temp;
}

var courseHelper = function(Course) {
    if (Course === "") {
        return -1;
    }
    var temp;
    for (var i = 0; i < allCourses.length; i++) {
        if (allCourses[i].getId() === Course) {
            temp = allCourses[i];
        }
    }
    return temp;
}

var addStudentToCourse = function(Student, Course) {
    if (Student === -1 || Course === -1) {
        return;
    }

    Course.addStudent(Student.getRoll());
    Student.addCourse(Course.getId());

    var dropStudent = document.getElementById("DropStudentFromCourse").student;
    var opt = document.createElement("OPTION");
    opt.value = Course.getId();
    opt.text = Course.getName();
    dropStudent.add(opt, 0);

    var dropCourse = document.getElementById("DropStudentFromCourse").course;
    var opt = document.createElement("OPTION");
    opt.value = Student.getRoll();
    opt.text = Student.getName();
    dropCourse.add(opt, 0);

    alert("Student Added to Course");
}

var dropStudentFromCourse = function(Student, Course) {
    if (Student === -1 || Course === -1) {
        return;
    }

    Student.dropCourse(Course.getId());
    Course.dropStudent(Student.getRoll());

    alert("Student Dropped From Course");
}

var removeCourse = function(Course) {
    if (Course === -1) {
        return;
    }

    for (var i in allCourses) {
        if (allCourses[i].getId() === Course) {
            var temp = i;
        }
    }

    for (var i in allStudents) {
        if (allStudents[i].findCourse(Course.getId())) {
            allStudents[i].dropCourse(Course.getId());
        }
    }

    var allC = document.getElementById("allCourses");
    var courses = document.getElementById("ddCourses");
    var dCourses = document.getElementById("dropCourse");
    var courseR = document.getElementById("courseRemove");

    allC.deleteRow(parseInt(temp) + 1);
    courses.remove(temp);
    dCourses.remove(temp);
    courseR.remove(temp);
    allCourses.splice(temp, 1);

    alert("Course Removed");
}

var removeStudent = function(Student) {
    if (Student === -1) {
        return;
    }

    for (var i in allStudents) {
        if (allStudents[i].getRoll() === Student) {
            var temp = i;
        }
    }

    for (var i in allCourses) {
        if (allCourses.findStudent(Student.getRoll())) {
            allCourses[i].dropStudent(Student.getRoll());
        }
    }

    var allS = document.getElementById("allStudents");
    var students = document.getElementById("ddStudents");
    var dStudents = document.getElementById("dropStudent");
    var studentR = document.getElementById("studentRemove");

    allS.deleteRow(parseInt(temp) + 1);
    students.remove(temp);
    dStudents.remove(temp);
    studentR.remove(temp);
    allStudents.splice(temp, 1);

    alert("Student Removed");
}

var viewEnrolled = function(Course) {
    if (Course === -1) {
        return;
    }

    var i;
    for (i in allCourses) {
        if (allCourses[i] === Course) {
            break;
        }
    }

    var stuTable = document.getElementById("selectedStudents");

    while (stuTable.rows.length > 1) {
        stuTable.deleteRow(stuTable.rows.length - 1);
    }

    var sStudent = allCourses[i].getStudents();

    for (i in allStudents) {
        if (sStudent.indexOf(allStudents[i].getRoll()) != -1) {
            var row = stuTable.insertRow(-1);
            var roll = row.insertCell(0);
            var name = row.insertCell(1);
            var year = row.insertCell(2);

            roll.innerHTML = allStudents[i].getRoll();
            name.innerHTML = allStudents[i].getName();
            year.innerHTML = allStudents[i].getYear();
        }
    }
}

var viewCoursesTaken = function(Student) {
    if (Student === -1) {
        return;
    }

    var i;
    for (i in allStudents) {
        if (allStudents[i] === Student) {
            break;
        }
    }

    var cTable = document.getElementById("selectedCourses");

    while (cTable.rows.length > 1) {
        cTable.deleteRow(cTable.rows.length - 1);
    }

    var sCourse = allStudents[i].getCourseIds();

    for (i in allCourses) {
        if (sCourse.indexOf(allCourses[i].getId()) != -1) {
            var row = cTable.insertRow(-1);
            var id = row.insertCell(0);
            var name = row.insertCell(1);

            id.innerHTML = allCourses[i].getId();
            name.innerHTML = allCourses[i].getName();
        }
    }
}
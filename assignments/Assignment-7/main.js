var load = function() {
    viewAllCourses();
    viewAllStudents();
}

var addNewStudent = function(roll, name, year) {
    if (roll > 20169999 || roll < 20110001 || !name.match(/^[A-Za-z]+$/) || !year.match(/^[U][G][1-6]$/)) {
        alert("Wrong Input");
        return;
    }

    var x;

    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/addStudent",
        method: "POST",
        data: { roll: roll, name: name, year: year },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var addNewCourse = function(id, name) {
    if (!id.match(/^[A-Z]{3}[0-9]{3}$/) || !name.match(/^[A-Za-z]+$/)) {
        alert("Wrong Input");
        return;
    }

    var x;

    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/addCourse",
        method: "POST",
        data: { id: id, name: name },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var fetchStudents = function() {
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/students",
        method: "GET",
        success: function(response) {
            allStudents = response.students;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            return;
        }
    });
}

var fetchCourses = function() {
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/courses",
        method: "GET",
        success: function(response) {
            allCourses = response.courses;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            return;
        }
    });
}

var dropdownStudent = function(inp, id) {
    var ddSlist = document.getElementById(id);
    var opt = ddSlist.createElement("OPTION");
    opt.value = inp;
    opt.text = inp;
    ddSlist.options.add(opt);
}

var dropdownCourse = function(inp, id) {
    var ddClist = document.getElementById(id);
    var opt = document.createElement("OPTION");
    opt.value = inp;
    opt.text = inp;
    ddClist.options.add(opt);
}

var addStudentToCourse = function(roll, id) {
    var x;
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/enroll",
        method: "POST",
        data: { roll: roll, id: id },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var dropStudentFromCourse = function(roll, id) {
    var x;
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/drop",
        method: "POST",
        data: { roll: roll, id: id },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var viewCoursesTaken = function(roll) {
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/coursesTaken",
        method: "GET",
        success: function(response) {
            var cList = response.courses;
            var courseTable = document.getElementById("selectedCourses");
            var deleterow = courseTable.rows.length;
            while (--deleterow) {
                courseTable.deleteRow(deleterow);
            }

            for (var i = 0; i < cList.length; i++) {
                var row = cList.insertRow(-1);
                var id = row.createElement(0);
                var name = row.createElement(1);

                id.innerHTML = cList[i].id;
                name.innerHTML = cList[i].name;
            }

            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var viewEnrolled = function(id) {
    var x;
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/studentsEnrolled",
        method: "GET",
        success: function(response) {
            var sList = response.students;
            var studentTable = document.getElementById("selectedStudents");
            var deleterow = studentTable.rows.length;
            while (--deleterow) {
                studentTable.deleteRow(deleterow);
            }

            for (var i = 0; i < sList.length; i++) {
                var row = studentTable.insertRow(-1);
                var roll = row.createElement(0);
                var name = row.createElement(1);
                var year = row.createElement(2);

                roll.innerHTML = sList[i].roll;
                name.innerHTML = sList[i].name;
                year.innerHTML = sList[i].year;
            }

            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var removeStudent = function(roll) {
    var x;
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/deleteStudent",
        method: "POST",
        data: { roll: roll },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var removeCourse = function(id) {
    var x;
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/deleteCourse",
        method: "POST",
        data: { id: id },
        success: function(response) {
            alert(response);
            x = response;
        },
        error: function(xhr, response, eThrown) {
            alert(response);
            x = response;
        }
    });
    return x;
}

var viewAllStudents = function() {
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/students",
        method: "GET",
        datatype: "JSON",
        success: function(response) {
            var stList = response.students;
            var studentTable = document.getElementById("allStudents");
            var deleterow = studentTable.rows.length;
            $("#ddStudents").empty();
            $("#studentRemove").empty();
            $("#dropStudent").empty();
            $("#displayCourses").empty();
            while (--deleterow) {
                studentTable.deleteRow(deleterow);
            }

            for (var i = 0; i < stList.length; i++) {
                var row = studentTable.insertRow(-1);
                var roll = row.createElement(0);
                var name = row.createElement(1);
                var year = row.createElement(2);

                roll.innerHTML = stList[i].roll;
                name.innerHTML = stList[i].name;
                year.innerHTML = stList[i].year;

                dropdownStudent(stList[i].roll, "ddStudents");
                dropdownStudent(stList[i].roll, "studentRemove");
                dropdownStudent(stList[i].roll, "dropStudent");
                dropdownStudent(stList[i].roll, "displayCourses");
            }
        },
        error: function(xhr, response, eThrown) {}
    });
}

var viewAllCourses = function() {
    $.ajax({
        async: false,
        url: "http://0.0.0.0:5000/courses",
        method: "GET",
        datatype: "JSON",
        success: function(response) {
            var csList = response.courses;
            var courseTable = document.getElementById("allCourses");
            var deleterow = courseTable.rows.length;
            $("#ddCourses").empty();
            $("#courseRemove").empty();
            $("#dropCourse").empty();
            $("#displayStudents").empty();
            while (--deleterow) {
                courseTable.deleteRow(deleterow);
            }

            for (var i = 0; i < csList.length; i++) {
                var row = courseTable.insertRow(-1);
                var id = row.createElement(0);
                var name = row.createElement(1);

                id.innerHTML = csList[i].id;
                name.innerHTML = csList[i].name;

                dropdownCourse(csList[i], "ddCourses");
                dropdownCourse(csList[i], "courseRemove");
                dropdownCourse(csList[i], "dropCourse");
                dropdownCourse(csList[i], "displayCourses")
            }
        },
        error: function(response) {}
    });
}
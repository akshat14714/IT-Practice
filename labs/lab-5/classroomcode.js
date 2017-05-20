function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.getAge = function() {
        return this.age;
    }
}

Person.prototype.name = function() {
    return this.name;
}

function Teacher(name, age, sex, subject) {
    Person.call(this, name, age, sex);
    this.subject = subject;
}

function Student(name, age, sex, roll_no, subjects) {
    Person.call(this, name, age, sex);
    this.roll_no = roll_no;
    this.subjects = subjects;
}

function getParticipants(subjectName, persons) {
    var obj = {
        "teacher": [],
        "students": []
    }
    for (var i in persons) {
        if (persons[i] instanceof Student) {
            var arr = persons[i].subjects;
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === subjectName) {
                    obj.students.push(persons[i].roll_no);
                }
            }
        }
        if (persons[i] instanceof Teacher) {
            if (persons[i].subject === subjectName) {
                obj.teacher.push(persons[i].name);
            }
        }
    }
    return obj;
}
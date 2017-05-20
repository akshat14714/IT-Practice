function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.getAge = function() {
        return this.age;
    };
};

Person.prototype.name = function() {
    return this.name;
};
var data = require('itws2-sample-marks-data');

var getHighestMarks = function(data) {
    var curMax = 0;
    var curName = 0;
    for (var name in data) {
        marks = data[name];
        var total = 0;
        var i = 0;
        while (i < marks.length) {
            total += marks[i];
            i += 1;
        }
        if (curMax < total) {
            curMax = total;
            curName = name;
        }
    }
    return curName;
}

var getSuject2Toppers = function(data) {
    var topper = [];
    var highestMarks = 0;
    for (var name in data) {
        if (highestMarks < data[name][1]) {
            highestMarks = data[name][1];
        }
    }
    for (var name in data) {
        if (data[name][1] == highestMarks) {
            topper.push(name);
        }
    }
    topper.sort();
    return (topper);
}

var getSubjectAverage = fuction(data) {
    var average = [];
    var total = 0;
    for (var name in data) {
        total += 1;
    }
    for (var i = 0; i < 5; i++) {
        var sum = 0;
        for (var name in data) {
            sum += data[name][i];
        }
        average.push(sum / total);
    }
    return (average);
}

var getAbove = function(data, number) {
    var above = [];
    for (var name in data) {
        var sum = 0;
        for (var i = 0; i < 5; i++) {
            sum += data[name][i];
        }
        if (sum / 5 > number) {
            above.push(name);
        }
    }
    above.sort();
    return (above);
}

module.exports.getHighestMarks = getHighestMarks;
module.exports.getSubject2Toppers = getSubject2Toppers;
module.exports.getSubjectAverage = getSubjectAverage;
module.exports.getAbove = getAbove;

var data = require('itws2-sample-marks-data');

var table = document.getElementsById("students-body");

for (var name in data) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = name;
    var td2 = document.createElement("td");
    td2.innerHTML = data[name][0];
    var td3 = document.createElement("td");
    td3.innerHTML = data[name][1];
    var td4 = document.createElement("td");
    td4.innerHTML = data[name][2];
    var td5 = document.createElement("td");
    td5.innerHTML = data[name][3];
    var td6 = document.createElement("td");
    td6.innerHTML = data[name][4];

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
}
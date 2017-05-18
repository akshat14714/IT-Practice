var fifthday = function() {
    var d = new Date();
    var n = d.getDay;
    var Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    n = (n + 5) % 7;
    //console.log(Day[n]);
    //alert(Day[n]);
    return Day[n];
}

var altSpaceToUnderscore = function(str) {
    var counter = 0;
    str = str.trim();
    var arr = str.split(" ");
    str = "";
    for (var i = 0; i < arr.length - 1; i++) {
        if (i % 2 == 0) {
            str = str.concat(arr[i], " ");
        } else {
            str = str.concat(arr[i], "_");
        }
    }
    str = str.concat(arr[arr.length - 1]);
    return str;
}

var interestingSort = function(str) {
    str = str.trim();
    var arr = str.split("");
    var str1 = arr.filter(function(arr) { return arr <= "m" }).sort();
    var str2 = arr.filter(function(arr) { return arr > "m" });
    str = str1.concat(str2).join("");
    return str;
}

var getMeNextFirst = function(str) {
    str = str.trim().replace(/ +/g, " ");
    arr = str.split("");
    str = ""
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i++;
        }
    }
    str = arr.join("").trim();
    return str;
}
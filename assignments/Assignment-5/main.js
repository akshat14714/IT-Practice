var composition = function(f, g) {
    return function(x) {
        return f(g(x));
    }
}

var nthPowerFunc = function(func, n) {
    return function(x) {
        for (var i = 0; i < n; i++) {
            x = func(x);
        }
        return x;
    }
}


var composeFunctionsInArray = function(arr) {
    var arr1 = arr.filter(function(arr) { return isNaN(arr) });
    var arr2 = arr1.reduce(function(a, b) {
        return composition(a, b);
    });
    return arr2;
}

var average = function(arr) {
    var avg = arr.reduce(function(total, num) {
        return total + num;
    });
    return avg / arr.length;
}

var averageMoreThanX = function(arr, x) {
    var arr1 = arr.filter(function(a) {
        {
            return a >= x;
        });
        return average(arr1);
    }

    var moreThanK = function(arr, k) {
        return arr.reduce(function(a, b) {
            return a + (b >= k ? 1 : 0);
        }, 0);
    }

    var moreThanKArr = function(arr1, arr2) {
        var arr = arr2.map(function(x) {
            return moreThanK(arr1, x);
        });
        return arr;
    }
}

var createCounter = function() {
    var a = 0;
    return (function() {
        return a++;
    })
}
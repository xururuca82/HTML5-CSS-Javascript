var func1 = function(a,b) {
    return a+b;
}

var funct2 = function(callback) {
    return callback(1,2);
    
}

console.log(funct2(func1));
 
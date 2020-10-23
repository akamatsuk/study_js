function say_hello(greeting) {
    console.log(greeting);
}
say_hello("Good Morning");
say_hello("Good afternoon");
say_hello("Good evening");


var hello = function(){
    console.log("Good Morning");
};

hello();

function cal(x) {
    console.log(x * 3);
};

cal(6);

function cal(x, y) {
    console.log(x / y);
};

cal(6, 3);

function cal(x, y) {
    return x / y;
};

var result = cal(6, 3)
console.log(result);
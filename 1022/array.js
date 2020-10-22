var a = new Array(3);

a[0] = "sato";
a[1] = "suzuki"
a[2] = "takahashi"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

var a = new Array("sato", "suzuki", "takahashi");

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

var arr = ["sato", "suzuki", "takahashi"];

arr[1] = "tanaka";
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

var arr;
arr = [["sato", "suzuki"],["takahashi","tanaka"]];

console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[1][0]);
console.log(arr[1][1]);

for(var i = 0; i <= 4; i ++) {
    if(i == 3) {
        continue;
    }
    console.log(i);
}

// roop
for(var i = 0; i <= 2; i ++) {
    for(var j = 0; j <= 2; j ++) {
        console.log( i + "-" + j);
    }
}

var arr = [2, 4, 6, 8, 10];

for(var i = 0; i <= 4; i++) {
    console.log(arr[i]);
}

var sum = 0;

for(var i = 0; i <= 4; i ++){
    sum += arr[i];
}
console.log(sum);

// for(var i=0|は何回目の処理なのか； i <>=は何回繰り返して{}の処理をしたいのか; 
// i++はカウンタを一ずつ増加させますよ（書き方で飛ばした処理など指定できるところ）)
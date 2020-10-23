class Student {
    //最初の文字を大文字にするのが定番
    constructor(name){
        this.name = name;
    }
    avg(math, english) {
        console.log((math + english) /2);
    }
}

var a001 = new Student("sato");
a001.avg(80, 70);
//classを使える様にすることをインスタンス化（実体化）という
console.log(a001.name);

var a002 = new Student("tanaka");
console.log(a002.name);

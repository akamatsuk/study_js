'use strict';

// {
//     const scores = [80, 90, 40];
//     scores.splice(1, 1, 40, 50);

//     for (let i = 0; i < scores.length; i++) {
//         console.log(`Score ${i}: ${scores[i]}`);
//     }
// }

// {
//     const otherScores = [10, 20];
//     const scores = [80, 90, 40, 70,  ...otherScores];
//     // console.log(scores);

//     function sum(a, b) {
//         console.log(a + b);
//     }

//     sum(...otherScores);

// }

// {
    // const scores = [80, 90, 40, 70];

    // const [a, b, c, d] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

    // const [a, b, ...others] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(others);

    // let x = 30;
    // let y = 70;
    // [x, y] = [y, x];
    // console.log(x);
    // console.log(y);
// }

// {
//     const scores = [80, 90, 40, 70];

//     // scores.forEach((score) => {
//     scores.forEach((score, index) => {
//         console.log(`Score ${index}: ${score}`);
//     });
// }

// {
//     const prices = [180, 190, 200];

//     // const uodatedPrices = prices.map((price) => {
//     //     return price +20;
//     // });

//     const updatedPrices = prices.map(price =>  price + 20);
//     console.log(updatedPrices);
// }

// {
//     const numbers = [1, 4, 7, 8, 10];

//     // const evenNumbers = numbers.filter(number => {
//     //     if (number % 2 === 0) {
//     //         return true;
//     //     } else {
//     //         return false;
//     //     }
//     // });
//     const evenNumbers = numbers.filter(number => number % 2 === 0);

//     console.log(evenNumbers);
// }

// {
    // const point = [100, 180];

    // const point = {x: 100, y: 180};
    
//     const point = {
    //     x: 100,
    //     y: 180,
    // };

//     point.x = 120;

//     // console.log(point.x);
//     // console.log(point['y']);

//     point.z = 90;
//     delete point.y;
//     console.log(point);
// }

// {
//     const otherProps = {
//         r: 4,
//         color: 'red',
//     };

//     const point = {
//         x: 100,
//         y: 180,
//         ...otherProps
//     };
//     // console.log(point);

//     const {x, r, ...others} = point;
//     console.log(x);
//     console.log(r);
//     console.log(others);
// }

// {
    // const point = {
    //     x: 100,
    //     y: 180,
    // };

    // const keys = Object.keys(point);
    // keys.forEach(key => {
    //     console.log(`Key: ${key} Value: ${point[key]}`);
    // });

//     const points = [
//         {x: 30, y: 20},
//         {x: 10, y: 50},
//         {x: 40, y: 40},
//     ];
//     console.log(points[1].y);
    
// }

// {
    // let x = 1;
    // let y = x;
    // x = 5;
    // console.log(x);
    // console.log(y);
    
    // let x = [1, 2];
    // let y = x;
    // x[0] = 5;
    // console.log(x);
    // console.log(y);


    // let x = [1, 2];
    // let y = [...x];
    // x[0] = 5;
    // console.log(x);
    // console.log(y);
// }

// {
//     const str = 'hello';

    // console.log(str.length);

    // str.substring(開始位置、終了位置)
    // console.log( str.substring(2, 4));

//     console.log(str[1]);
// }

// {
    // const d = [2019, 11, 14];

    // console.log(d.join(''));
    // console.log(d.join('/'));

//     const t  = '17:08:24';
//     // console.log(t.split(':'));
//     const [hour, minute, second] = t.split(':');
//     console.log(hour);
//     console.log(minute);
//     console.log(second);
// }

// {
//     const scores = [10, 3, 9];


//     let sum = 0;

//     scores.forEach(score =>{
//         sum += score;
//     });

//     const avg = sum / scores.length;

//     // console.log(sum);
//     // console.log(avg);

//     // console.log(Math.floor(avg));
//     // console.log(Math.ceil(avg));
//     // console.log(Math.round(avg));
//     // console.log(avg.toFixed(3));
    
//     console.log(Math.random());

// }

// {
    // console.log(Math.random());

//     console.log(Math.floor(Math.random() * 6)+ 1);
// }

// {
//     const d = new Date(2019, 10);
//     d.setHours(10, 20, 30);
//     // console.log(d);
//     // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
//     d.setDate(31);
//     d.setDate(d.getDate() + 3); 
//     console.log(d);
// }

// {
//     // alert('hello');
//     const answer = confirm('how are you ?');
//     if (answer) {
//         console.log('i' + "'" + 'm fine too. thank you!');
//     } else {
//         console.log('oh...');
//     }
// }

// {
//     let i = 0;

//     function showTime() {
//         console.log(new Date());
//         i++;
//         if (i > 2) {
//             clearInterval(intervalId);
//         }
//     }

//     const intervalId = setInterval(showTime, 100);
// }

// {
//     let i = 0;

//     function showTime() {
//         console.log(new Date());
//         const timeoutId = setTimeout(showTime, 1000);
//         i++;
//         if (i > 2) {
//             clearTimeout(timeoutId);
//         }
//     }

//     showTime();
// }

// {
//     // const name = 'taguchi';
//     const name = 5;
    
//     try {
//         console.log(name.toUpperCase());
//     } catch (e) {
//         console.log(e);
//     }

//     console.log('Finish!');
// }

{
    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount} likes`);
        }

        like() {
            this.likeCount++;
            this.show();
        }
        //静的メソット
        //thisは使えない
        // static showInfo() {
        //     console.log('Post class version 1.0');
        // }
    }

    class SponsoredPost extends Post{
        constructor(text, sponsor) {
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            super.show();
            console.log(`... sponsored by ${this.sponsor} `);
        }
    }
    
    const posts = [
        new Post('study javascript'),
        new Post('Fun Programing!'),
        new SponsoredPost('Let is master at 3 minute !', 'dotinstall'),
    ];

    posts[2].show();
    posts[2].like();
    
}

const apiA = [
    {name: 'Steve', age: 30},
    {name: 'Alon', age: 20},
]
const apiB = "B"

const f1 = new Promise(resolve => resolve(apiA));
const f2 = new Promise(resolve => resolve(apiB));

Promise.all([f1, f2])
.then(res => console.log(res))

const first = new Promise((resolve, reject) => {
    setTimeout((arg) => {console.log('first...'); return resolve(arg)}, 1000, 'first');
});
const second = new Promise((resolve, reject) => {
    setTimeout((arg) => {console.log('second...'); return resolve(arg)}, 100, 'second');
});

Promise.race([first, second]).then(result => {
    console.log('race', result); // second
});
// Promise.any([first, second]).then(result => {
//     console.log('any', result); // second
// });
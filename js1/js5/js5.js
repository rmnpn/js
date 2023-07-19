// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let area1 = (a,b) => a*b;
console.log(area1(10,20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let area2 = (r) => Math.PI*r**2;
console.log(area2(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let area3 = (h,r)=> 2*Math.PI*r*(r+h);
console.log(area3(2,3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array1 = () => {
    for (const arg of sixnumb){
    console.log(arg)}
}
const sixnumb = [1,2,3,4,5,6]
array1();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textfun = (sometext) => document.write(`Ти пес, ${sometext}`)

textfun(`електрофарез`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulfun = (li) => document.write(`<ul> <li>${li}</li> <li>${li}</li> <li>${li}</li> </ul>`)
ulfun(`спесок`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let funcicl = (ciclli) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${ciclli}</li>`)
    }
    document.write(`</ul>`)
}
funcicl(`працюй`);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let anotherfunct = () => {
    document.write(`<ul>`)
    for (const argument of array) {
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`)
}
const array = [1,2,`2`,`pes`, true]
anotherfunct();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objectfun = () => {
    for (const argument of array11) {
      document.write(`<div>${argument.id}. ${argument.name} - age: ${argument.age}</div>`)

    }
}
const array11 = [{id:1,name:`kos`,age:22},{id:2,name:`kok`,age:11}]
objectfun();

// - створити функцію яка повертає найменьше число з масиву


let lessfun = (arrless) => {
    let res = arrless[0];
    for (let i = 0; i <arrless.length; i++) {
        if (arrless[0] > arrless[i]){
            res = arrless[i];
        }
    }
    return res;
}

const array22 = [1,2,44,-30];
console.log(lessfun(array22));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sum = (arr) => {
    let res = 0;
    for (const arrElement of arr) {
        res += + arrElement;
    }
    return res;
}
console.log(sum([1,2,10,6,-55]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[index1];
        let b = arr[index2];
        arr[index1] = b;
        arr[index2] = a;
        return arr;
    }
}
console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange =(sumUAH,currencyValues,exchangeCurrency) => {
    for (const keyvalue of currencyValues) {
        if (keyvalue.currency === exchangeCurrency){
            return sumUAH/keyvalue.value;
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

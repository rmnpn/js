// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b){
    return a*b;
}
let res = area(3,4)
console.log(res)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area2(r){
    return Math.PI*r**2;
}
let res2 = area2 (2);
console.log(res2);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area3 (h,r) {
    return 2*Math.PI*r*(r+h)
}
let res3 = area3(2,3)
console.log(res3)
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [2,3,4,5,6,3,1]
    function array(){
        for (const array of arr) {
            console.log(array);
        }
    }
array();
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(textitem){
    document.write(`<p>${textitem}</p>`)
}
text(`псєчі пси`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list (litext) {
    document.write(`<ul>`)
    document.write(`<li>${litext}</li>
                    <li>${litext}</li>
                    <li>${litext}</li>`)
    document.write(`</ul>`)

}
list(`Добрий день`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2 (litext2,linumber) {
    document.write(`<ul>`)
    for (let i = 0; i <linumber; i++) {
        document.write(`<li>${litext2}</li>`)
    }
    document.write(`</ul>`)

}
list2(`Добрий день`,4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr2 = [1,2,'22',true]
function arrlist(){
    document.write(`<ul>`)
    for (const arrele of arr2) {
        document.write(`<li>${arrele}</li>`)
    }
    document.write(`</ul>`)
}
arrlist();
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrobj = [{id:1, name:`Vasyl`,age:33},{id:2, name:`Val`,age:13}]
function objfun() {
    for (const arr of arrobj) {
        document.write(`<p> id: ${arr.id}, name - ${arr.name}, age - ${arr.age} </p>`)
    }
}
objfun();

// - створити функцію яка повертає найменьше число з масиву
function lessnum(pust) {
    let less = pust[0]
    for (let i = 0; i < pust.length; i++) {
        if (less>pust[i]){
            less=pust[i];
        }
    }
    return less;
}

const minnum = [1,3,45,6,-3];
console.log(lessnum(minnum))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result+= +arr[i];
    }
    return result;
}
let array5 = [1,2,10];
console.log(sum(array5))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    for (const arrElement of arr) {
        let num1 = arr[index1];
        let num2 = arr[index2];
       arr[index1]=num2;
       arr[index2]=num1;

        return arr
    }

}

console.log(swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currV of currencyValues) {
        if (currV.currency=exchangeCurrency) {
            return sumUAH/currV.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
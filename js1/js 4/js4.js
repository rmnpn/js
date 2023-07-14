// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area (a,b) {
    return a*b;
}

let r1= area(3,6);
let r2= area(2,4);
console.log(r1, r2)



// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius (r) {
    return Math.PI*r**2;

}

let r3 = radius(3);
console.log(r3);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilindr (h,r) {
    return 2*Math.PI*r*(r+h);
}

let r4 = cilindr (2,3)
console.log(r4);
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr5(numb) {
    for (let number of numbers) {
        console.log(number)
    }
}

let numbers = [2,4,5,6,7,5,4];
arr5();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (filling) {
   document.write(`<p>${filling}</p>`) ;

}
text(`Текстовий текст текстович`);
text(`Text text text`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(li) {
    document.write(`<ul>`);
    document.write(`<li>${li}</li>
                    <li>${li}</li>
                    <li>${li}</li>`)
    document.write(`</ul>`);
}
list1(`spysok`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(li,penis) {
    document.write(`<ul>`);
    for (let i = 0; i < penis; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}
list(`morda`,3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr(ullist) {
    document.write(`<ul>`)
    for (let lilist of ullist) {
        document.write(`<li>${lilist}</li>`)
    }
    document.write(`</ul>`)
}
let primit = [1,2,`1`,`2`,true,555];
arr(primit);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function obj(objects) {
    for (const user of objects)
    document.write(`<div> id: ${user.id}, name: ${user.name}, age: ${user.age} </div>`)
}

const users = [{ id:1, name:`Vasyl`, age:23 },
                                         { id:2, name:`Petro`, age:26 },
                                         { id:3, name:`Oleg`, age:33 }
];

obj(users);

// - створити функцію яка повертає найменьше число з масиву

function less(minimum) {
    let minnum = minimum[0]
    for (let i = 1; i < minimum.length; i++) {
        if (minnum > minimum[i]) {
            minnum = minimum[i];
        }
    }
    return minnum;
}


let lessnum = [112,211,433,10,532,2123,332,-14];
    console.log(less(lessnum));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const array = [1,2,10];
function sum(arr){
    let result = 0
    for (const arrKey of arr) {
        result =result+arrKey;
    }
    return result;
}
console.log(sum(array))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    for (const arrayElement of arr) {
        const in1 = arr[index1]
        const in2 = arr[index2]
        arr[index1] = in2;
        arr[index2] = in1;

        return arr
    }

}
console.log(swap ([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250]

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return  sumUAH/currencyValues.value;
//         }
//     }
// }
//
// result = exchange
// (10000,
//     [{currency:'USD',value:40}, {currency:'EUR',value:42}],
//     'USD');
// console.log(result);
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency===exchangeCurrency) {
            return sumUAH/item.value
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
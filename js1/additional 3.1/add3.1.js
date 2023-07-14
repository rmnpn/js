// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrnum =[1,2,3,4,5];
console.log(arrnum)

let arrstring =[`1`,`2`,`3`,`4`,`5`];
console.log(arrstring)

let arrnsb = [1,2,`3`,`4`,false];
console.log(arrnsb)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrnone = []

arrnone[0]=1;
arrnone[1]=2;
arrnone[2]=`2`;
arrnone[3]=`7`;
arrnone[4]=false;

console.log(arrnone)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arrmas = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while

i=0;
while (i<arrmas.length)
{
    let number = arrmas[i];
    console.log(number)
    i++;
}

// 2. перебрати його циклом for
for (let numberFor of arrmas) {
    console.log(numberFor)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i=1;
while (i<arrmas.length) {
    let oddnumber = arrmas[i];
    console.log(oddnumber)
    i=i+2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 1; i < arrmas.length; i=i+2) {
    const oddfornumber = arrmas[i];

    console.log (oddfornumber);
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let numberokten of arrmas) {
    if (numberokten%3==0) {
        numberokten=`okten`
    }
    console.log(numberokten)
}

// 8. вивести масив в зворотньому порядку.

for (let i = arrmas.length-1; i>=0 ; i--) {
    const zvornumber = arrmas[i];

    console.log(zvornumber);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i=0
while (i<arrmas.length) {
    const pairarrwhile = arrmas[i];
    console.log(pairarrwhile)
    i+=2;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arrmas.length; i+=+2) {
const pairarray = arrmas[i];
console.log(pairarray)
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let a =[1,2,3,`a`, `v`, true, `meksa`, `ahha`, 11, 27 ]
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `kamasutra`,
    pageCount: 133,
    genre: `fantasy`
}

let book2 = {
    title: `js`,
    pageCount: 100500,
    genre: `vzdroch`
}

let book3 = {
    title: `fefa`,
    pageCount: 23,
    genre: `sport`
}

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: `kitpes`,
    pageCount: 111,
    genre: `fantasy`,
    authors: [
        {
            name:`Vasel`,
            age:33
        },
        {
            name:`Nevasel`,
            age:22
        }
    ]
}

let book5 = {
    title: `komora`,
    pageCount: 101,
    genre: `reciepts`,
    authors: [
         {
            name:`Kom`,
            age:25
        },
         {
            name:`Ora`,
            age:14
        }
    ]
}
let book6 = {
    title: `pedofildream`,
    pageCount: 69,
    genre: `horror`,
    authors: [
         {
            name:`Anya`,
            age:39
        },
         {
            name:`Matviyko`,
            age:11
        }
    ]
}
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
     {
        name: `Koko`,
        username: `koko11`,
        password: `p@ssword`
    },
     {
        name: `chanel`,
        username: `ictv14`,
        password: `pEssword`
    },
    {
        name: `Dashka`,
        username: `Daryna32`,
        password: `vod@0.7`
    },
    {
        name: `Zadohuya`,
        username: `bahato9292`,
        password: `zayebevs121`
    },
    {
        name: `Petro`,
        username: `Prostyi`,
        password: `potreba14`
    },
    {
        name: `Adolf`,
        username: `Furer42`,
        password: `hitler1488`
    },
     {
        name: `Sternenko`,
        username: `ms.esdabes`,
        password: `samozahyst3000`
    },
     {
        name: `Tolik`,
        username: `Balloner40`,
        password: `lovechildunder10`
    },
     {
        name: `Skotch`,
        username: `montazhniy`,
        password: `kleymenevsudy`
    },
    {
        name: `Cristiano`,
        username: `Cr7`,
        password: `Siuuuuuuuuu`
    },
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0
    if (x!==0)
    {
        console.log(`Вірно`);
    }
    else
    {
        console.log(`Невірно`);
    }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 22
    if (0<=time && time<=14)
    {
        console.log(`Перша чверть`);
    }
    else if (15<=time && time<=29)
    {
        console.log(`Друга чверть`);
    }
    else if (30<=time && time<=44)
    {
        console.log(`Третя чверть`);
    }
    else if (45<=time && time<=59)
    {
        console.log(`Четверта чверть`);
    }
    else
    {
        console.log(`Ти шо йобнутий, пише ж, від 0 до 59, нахуя інше вводити`)
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)

let day = 3
    if (1<=day && day<=10)
    {
        console.log(`1 декада`)
    }
    else if (11<=day && day<=20)
    {
        console.log(`2 декада`)
    }
    else if (21<=day && day<=31)
    {
        console.log(`3 декада`)
    }
    else
    {
        console.log(`ну курва, та скільки можна`)
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

 let daynum = +prompt(`input day number`)
    switch (daynum) {
        case 1:
            console.log(`Monday`)
            break;
        case 2:
            console.log(`Tuesday`)
            break;
        case 3:
            console.log(`Wednesday`)
            break;
        case 4:
            console.log(`Thursday`)
            break;
        case 5:
            console.log(`Friday`)
            break;
        case 6:
            console.log(`Suturday`)
            break;
        case 7:
            console.log(`Sunday`)
            break;
        //Глянеш тут.Я хотів добавити 2 різні повідомлення на більше 7 і коли вводились не цифри, але воно ніхуя не вийшло. Хоча вроді логіка в цьому є)
        // case daynum>7:
        //     console.log(`Нема стільки днів у тижні,єбанашка`)
        //     break;
        default:
            console.log (`Нема стільки днів у тижні,єбанашка`)
            break;
    }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt (`input number 1`)
let num2 = +prompt (`input number 2`)

    if (num1 > num2) {
        console.log(num1);
    }
    else if (num1 < num2) {
        console.log(num2)
    }
    else if (num1 = num2) {
        console.log(`однакова вздроч`)
    }
    else {
        console.log(`Ти що букви вводила, даунушка?`)
    }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xnum = false
    if (xnum=0 || xnum==NaN || xnum==null || xnum==undefined || xnum==`` ) {
        console.log(`default`)
    }
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ]

let jscomplextime = (coursesAndDurationArray[0].monthDuration)

if (jscomplextime > 5)
{
    console.log(`js complex time Супер`)
}

let javacomplextime = (coursesAndDurationArray[1].monthDuration)

if (javacomplextime > 5)
{
    console.log(`java complex time Супер`)
}

let pythoncomplextime = (coursesAndDurationArray[2].monthDuration)

if (pythoncomplextime > 5)
{
    console.log(`python complex time Супер`)
}

let qacomplextime = (coursesAndDurationArray[3].monthDuration)

if (qacomplextime > 5)
{
    console.log(`qa complex time Супер`)
}

let fscomplextime = (coursesAndDurationArray[4].monthDuration)

if (fscomplextime > 5)
{
    console.log(`fs complex time Супер`)
}

let frendcomplextime = (coursesAndDurationArray[5].monthDuration)

if (frendcomplextime > 5)
{
    console.log(`front end complex time Супер`)
}
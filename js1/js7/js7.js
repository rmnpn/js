// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function  User (id, name, surname, email, phone) {
this.id=id;
this.name=name;
this.surname=surname;
this.email=email;
this.phone=phone;

}

const user = [
new User(10, 'Sasha', 'Shovkovskyy', 123, 4308),
new User(2, 'Andriy', 'Shevchenko', 1234, 4307),
new User(3, 'Oleg', 'Gusev', 12345, 4307),
new User(5, 'Andriy', 'Nesmachnyy', 12356, 4306),
new User(4, 'Maxym', 'Kalinichenko', 12367, 4305),
new User(6, 'Sergiy', 'Rebrov', 12378, 4304),
new User(9, 'Andriy', 'Vashchuk', 12389, 4304),
new User(8, 'Artem', 'Milevskyy', 12398, 4302),
new User(7, 'Sergiy', 'Nazarenko', 12387, 4301),
new User(1, 'Andriy', 'Voronin', 12376, 4301), ];




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
user.filter(value => value.id%2===0);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

user.sort((a, b) => a.id - b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}
const client = [
    new Client (10, 'Sasha', 'Shovkovskyy', 123, 4308,['chleny','penisy','dicks']),
    new Client(2, 'Andriy', 'Shevchenko', 1234, 4307,['chleny','penisy']),
    new Client(3, 'Oleg', 'Gusev', 12345, 4307,['chleny','penisy','dicks','pipirky']),
    new Client(5, 'Andriy', 'Nesmachnyy', 12356, 4306,['chleny']),
    new Client(4, 'Maxym', 'Kalinichenko', 12367, 4305,['chleny','penisy','pyozdy']),
    new Client(6, 'Sergiy', 'Rebrov', 12378, 4304,['chleny','penisy','dicks','yayza','pyozdy']),
    new Client(9, 'Andriy', 'Vashchuk', 12389, 4304,['pyozdy','penisy','dicks']),
    new Client(8, 'Artem', 'Milevskyy', 12398, 4302,['chleny','pyozdy','hui','dicks','pyozdy','penisy']),
    new Client(7, 'Sergiy', 'Nazarenko', 12387, 4301,['chleny','penisy','dicks']),
    new Client(1, 'Andriy', 'Voronin', 12376, 4301,['chleny','penisy','dicks']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

client.sort((a, b) => a.order.length - b.order.length);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, producer, year, maxspeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.driver = [];
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`Model - ${this.model}`)
        console.log(`Producer - ${this.producer}`)
        console.log(`Year - ${this.year}`)
        console.log(`Max Speed - ${this.maxspeed}`)
        console.log(`Volume - ${this.volume}`)
        console.log(`Driver - ${JSON.stringify(this.driver)}`)
    }


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed+=newSpeed;
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 this.addDriver = function (driver){
        this.driver.push(driver);
 }
}

let tesla = new Car('tesla', 'mask', 2000, 400, 100);
tesla.addDriver({name: 'Vasyl', age:33});
tesla.increaseMaxSpeed(131);
tesla.info();
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor(model, producer, year, maxspeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
        this.driver=[];


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxspeed}`)
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
        this.info = function () {
    console.log('*****INFO*****')
            for (const key in this) {
                if (typeof this[key]==='function') continue;
                else if (typeof this[key]==='object') {
                    console.log(`${key} - ${JSON.stringify(this[key])}`)
                }
                else console.log(`${key} - ${this[key]}`)
            }
//я це бачив на конст, вирішив попробувати, впринципі все понятно, але треба запамятати шо до чого)

    console.log('*****INFO*****')
        }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
    this.maxspeed+=newSpeed;
    return maxspeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
        this.changeYear = function (newValue) {
    this.year=newValue;
        }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
        this.addDriver = function (driver) {
        this.driver.push(driver);
        }
    }
}
let Nyva = new Car2 ('nyva', 'nenormalnyi',1011,22,1000);
Nyva.changeYear(2012);
Nyva.increaseMaxSpeed(20);
Nyva.addDriver({name:'Nyvoeb', age:99});
Nyva.info();
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function  Cinderella (name, age, footsize){
    this.name=name;
    this.age=age;
    this.footsize=footsize;
}

const cinderellas = [
    new Cinderella('Tamara',39,44),
    new Cinderella('Andzhela',42,42),
    new Cinderella('Vera4ka',35,39),
    new Cinderella('Nastya',13,34),
    new Cinderella('Nika',23,23),
    new Cinderella('Sola',23,38),
    new Cinderella('Banditka',19,39),
    new Cinderella('Basistasina',23,37),
    new Cinderella('Kapota',32,41),
    new Cinderella('Barca',22,49),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name,age,findshoessize) {
        this.name=name;
        this.age=age;
        this.findshoessize=findshoessize;
    }
    find(arr){
        for (const cind in arr) {
            if (this.findshoessize===cind.footsize) {
                return cind;
            }

        }
    }

}

const prince = new Prince('Dodya',50,41);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log(prince.find(cinderellas));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cind.find(value => value.footsize === prince.findshoessize));
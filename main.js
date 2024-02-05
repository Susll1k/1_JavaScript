///// ex1

let name1 = prompt("Ваше имя: ")

alert("Привет, " + name1 + "!")

/////ex2


const year= 2024

let birth_date = prompt("В каком году вы родились: ")

alert("Тебе " + (year-birth_date))


/////ex3

let square_len = prompt("Длинна квадрата: ")

alert("Периметр квадрата: " + (square_len*4))


/////ex4

let radius = prompt("Радиус: ")

alert("Площадь окружности: " + (3.14 * radius**2))


/////ex5

let km = prompt("Расстояние в км: ")
let hour = prompt("За сколько часов ты хочет добраться: ")


alert("Cкорость, с которой необходимо двигаться: " + (km/hour))

////ex6

const dollar_to_euro=0.919092
let dollar = prompt("Доллар: ")
alert("Евро: " + (dollar * dollar_to_euro))

////ex7

let gb = prompt("объем флешки в гб: ")
alert(Math.floor(gb*1000/820) + " файла размером в 820 Мб помещается на флешку: ")


////ex8

let money = prompt("Сколько денег есть: ")
let price = prompt("Сколько стоит одна шоколадка: ")

alert("Ты можешь купить " + (Math.floor(money/price)) + " шоколадки и у тебя останется " + (money - Math.floor(money/price)* price))

////ex9

let num = prompt("Введите 3 значное число: ")

let n1 = num % 10 
let n2 = (num % 100 - n1) / 10
let n3 = (num - n1 - n2 * 10) / 100 

alert('Ответ: '+ n1 + n2 + n3)

//////ex10

let num_2 = prompt("Введите целое число: ")

num_2 % 2 == 0 ? alert('Even') : alert('Odd');

//let firstName = "George";
//console.log(firstName);firstName


//let age = "32";

//let fullName = (firstName + ' ' + age);
//alert(fullName);

//let lastName = prompt('What is your last name?');
//console.log(firstName + ' ' + lastName);


/*****Basic operators*/
//let year = 2019
//let yearJon = year - 33;
//let yearMark = year - 28;
//console.log(yearJon, yearMark);
//console.log

/*let heightMark = 1.75; //kg
let heightJon = 1.8; // meters

let massMark =92; // kg
let massJon = 78; // meters

let BMIMark = massMark / (heightMark * heightMark);
let BMIJon = massJon / (heightJon * heightJon);

let markHigherBMI = BMIMark > BMIJon;

if (BMIMark > BMIJon) {
	console.log('Mark\'s BMI is higher than John\'s');

}else{
	console.log('John\'s BMI is higher than Mark\'s');
}
*/

/*var firstName = 'George';
var age = 50;

if (age < 13) {
	console.log(firstName + ' is a boy!');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager!');
} else {
	console.log(firstName + ' is a Grown ASS Man!');
}

*/
// Ternary Operator
//var firstName = 'George';
//var age = 11;

//age >= 21 ? console.log(firstName + ' drinks beer.')
//: console.log(firstName + ' drink juice.');

/*var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
//This is a test
//switch Statement


/*var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;

var johnScore1 = 116;
var johnScore2 = 94;
var johnScore3 = 123;

var mikeTotal = (mikeScore1 + mikeScore2 + mikeScore3);
var mikeAverage = (mikeTotal/3);
var johnTotal = (johnScore1 + johnScore2 + johnScore3);
var johnAverage = (johnTotal/3);

if(johnAverage > mikeAverage){
	console.log('John team Wins!');
}else
{
	console.log('Mike Team Wins!');
}
*/

//Functions

/*function calcuateAge(birthyear) {
	return 2019 - birthyear;
}

var ageGeorge = calcuateAge(1986);
var ageDemond = calcuateAge(1987);
var ageShay = calcuateAge(1989);

console.log( ageGeorge, ageDemond, ageShay);
*/

// Fuctioin Statements and Expressions

/* var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a car';
		case 'web developer':
			return firstName + ' codes websites!';
		default:
			return firstName + ' does something else!';
	}
}

*/



/*
console.log(whatDoYouDo('teacher', 'Shay'));
console.log(whatDoYouDo('web developer', 'George'));
console.log(whatDoYouDo('driver', 'Demond'));
*/

// Arrays

/*var names = ['George', 'Demond', 'Shay'];
var years = new Array(1986, 1988, 1990);
console.log(names[0]);
console.log(names.length);

// You can mutate the array by

names[1] = 'Monnie';
console.log(names[1]);

//To add to an array

names[names.length] = 'Ashley';
console.log(names);
*/


// Objects and Properties

/*var George = {
	firstName: 'George',
	lastName: 'Avent',
	hairColor: 'Black',
	birthyear: '1986',
	family: ['Demond', 'Shay', 'Ashley']
};

George.hairColor = 'Brown';
George['birthyear'] = '1985';
console.log(George);
*/


	/*var George = {
	firstName: 'George',
	lastName: 'Avent',
	hairColor: 'Black',
	birthyear: '1986',
	family: ['Demond', 'Shay', 'Ashley'],
	 calcAge: function(birthyear) {
		return 2019 - birthyear;
	}
	
};

console.log(George.calcAge(1986));
*/

for (var i = 1; i <= 20; i++) {
	console.log(i);
}
	

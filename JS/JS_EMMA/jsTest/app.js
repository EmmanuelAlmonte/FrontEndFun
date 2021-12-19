// function getColor(phrase) {
// 	//WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
// 	if (phrase.toLowerCase() === "stop") {
// 		console.log("red");
// 	} else if (phrase.toLowerCase() === "slow") {
// 		console.log("yellow");
// 	} else if (phrase.toLowerCase() === "go") {
// 		console.log("green");
// 	} else {
// 		console.log("purple");
// 	}
// 	//AND THIS LINE ↑↑↑↑↑
// }

// let day = 3;

// switch (day) {
// 	case 1:
// 		console.log("Monday");
// 		break;
// 	case 2:
// 		console.log("Tuesday");
// 		break;
// 	case 3:
// 		console.log("Wednesday");
// 		break;
// 	case 4:
// 		console.log("Thursday");
// 		break;
// 	case 5:
// 		console.log("Friday");
// 	default:
// 		console.log("Weekend");
// }

// let movieLine = ["John", "kevin", "Ball", "Sterry", "Larry"];
// console.log(movieLine);
// movieLine.push("Barbell");
// console.log(movieLine);
// let lastPerson = movieLine.pop();

// console.log(movieLine);

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:

// planets.shift();
// planets.push("Saturn");
// planets.unshift("Mercury");

// const person = {
// 	Person: "Emma",
// 	Age: 20,
// 	favSport: "Soccer"
// };
// console.log(person.Age);

// for (let i = 1; i <= 10; i++) {
// 	console.log("the number: " + i);
// }


// DEFINE YOUR FUNCTION BELOW:

// function returnDay(num){
// 	let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// 	if(a == 1){
// 		return daysOfTheWeek[a]
// 	}
// 	else if(a == 2){
// 		return daysOfTheWeek[a]
// 	}
// 	else if(a == 3){
// 		return daysOfTheWeek[a]
// 	}
// 	else if(a == 4){
// 		return daysOfTheWeek[a]
// 	} 
// 	else if(a == 5){
// 		return daysOfTheWeek[a]
// 	} 
// 	else if(a == 6){
// 		return daysOfTheWeek[a]
// 	} 
// 	else if(a == 7){
// 		return daysOfTheWeek[a]
// 	} 
// 	else{
// 		return null
// 	}
// }

// let square= {
// 	area: function (side){
// 		return side * side
// 	}
// }
let fullNames = {
	{first}
}

let firstNames = fullNames.map(function(firstName){
	return firstName.first;
})
// JSON stands for Javascript object Notation.
// It is lightweight format for storing and transportaion data.
// JSON is often used when data is sent from a server.

// If Object to JSON we use stringify
// If JSON to Object we use parse

const bioData = {
	name: "Rituraj",
	age: 25,
	jobTitle: "Software Developer"
};

//console.log(bioData.jobTitle);
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(typeof jsonData);
console.log(jsonData.jobTitle);

// To convert the JSON back into an object
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);
console.log(objData.jobTitle);
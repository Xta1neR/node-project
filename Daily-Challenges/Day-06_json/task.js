// TASK

//1: Convert to JSON
//2: Now add the converted data to another file name "json1.json"
//3: Read the file(with help of fs modules)
//4: Again convert back to js obj to original 
//5: console.log


const fs = require('fs');


const originalData = { 
	name: "John", 
	age: 30, 
	city: "New York" 
};

// 1. Convert to JSON
const jsonData = JSON.stringify(originalData);

// 2. Add the converted data to another file named "json1.json"
fs.writeFileSync('json1.json', jsonData);

// 3. Read the file
const fileData = fs.readFileSync('json1.json', 'utf8');

// 4. Convert back to a JavaScript object
const parsedData = JSON.parse(fileData);

// 5. Log the parsed data
console.log(parsedData);
// WAP to perform the following with the help of Objects.
// a) Take input from the user regarding name, age, and gender.
// This data must be written into a json file. The same data should be read from the file and then get printed on the webpage,

const fs = require('fs');
const readline = require('readline');

// Create an interface to take user input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Prompt user for input
rl.question('Enter name: ', (name) => {
	rl.question('Enter age: ', (age) => {
		rl.question('Enter gender: ', (gender) => {
			// Create user object
			const userData = { name, age, gender };
			const jsonData = JSON.stringify(userData);

			// Write user data to a json file
			fs.writeFileSync('userdata.json', jsonData);

			// Read data from the json file and display
			const fileData = fs.readFileSync('userdata.json', 'utf8');
			const parsedData = JSON.parse(fileData);
			console.log(parsedData);

			rl.close();
		});
	});
});
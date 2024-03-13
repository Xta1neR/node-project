/* 
print the following 
'Hello after 5 seconds'
'Hello after 10 seconds'

condition : 
Use only 1 function.
*/


const myFunc = breakof => {
	console.log(`Hello after ${breakof} seconds`);
};
setTimeout(myFunc, 10000, 10); 
setTimeout(myFunc, 15000, 15);


/*
Print "ur name"
every second 
and stop after 5 seconds
after 5 times print Done and let node exit
*/

let count = 0;
const intervalId = setInterval(() => {
	console.log("Rituraj");
	count++;
	if (count === 5) {
		console.log("Done");
		clearInterval(intervalId);
	}
}, 1000);
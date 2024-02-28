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
setTimeout(myFunc, 5000, 5); 
setTimeout(myFunc, 10000, 10);

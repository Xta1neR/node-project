//setTimeout(func,time in milliseconds)
setTimeout(()=>{
console.log("I am executed after 3 seconds",3*1000);
})

// myFunc(arg1,agr2,aeg3...)
const myFunc = (param1) => {
	console.log("Hello",param1);
};
setTimeout(myFunc,3000, 'Rituraj Goswami');
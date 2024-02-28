

const EventEmitter = require("events");
const event = new EventEmitter();

//Register a listerner
event.on("Say Something", ()=>{
	console.log("Event Raised");
	console.log("Event Raised Again");
	console.log("Event Pareshan, Raised")
});

//Raised an Event 
event.emit("Say Something");


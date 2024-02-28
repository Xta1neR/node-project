const EventEmitter = require("events");
const event = new EventEmitter();

// Register a listener with a callback parameter
event.on("Say Something", (arg1, arg2) => {
	console.log(`Event Raised with arguments: ${arg1} ${arg2}`);
});

// Raised an Event with arguments
event.emit("Say Something", "Hello", "World");
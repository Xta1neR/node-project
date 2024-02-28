const Rituraj = require("./Day-04_exportModules.js");
const os = require("os");
const path = require("path");

console.log("Hello Here are details : ", Rituraj);

// OS MODULES 

console.log("Free memory in bytes",os.freemem());
console.log("Free memory in gigabytes",(os.freemem()/(1024**3)));

console.log("Total memory in bytes",os.totalmem());
console.log("Total memory in gigabytes",(os.totalmem()/(1024**3)));

console.log("System Architecture is : ", os.arch());

console.log("System CPU is : ", os.cpus());

console.log("Home Directory is : ", os.homedir());

console.log("Type is : ", os.type());

console.log("Version is : ", os.version());

console.log("Platform is : ", os.platform());

// PATH MODULES

console.log("Directory Path name is :", path.dirname());
console.log("Base Name is :", path.basename());
console.log("Extension Name is :", path.extname());

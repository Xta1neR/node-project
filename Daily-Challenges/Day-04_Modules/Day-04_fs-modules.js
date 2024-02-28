//The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

const fs = require("node:fs");

fs.writeFileSync('read.txt',"Welcome to LPU Node Classes");
// fs.writeFileSync('read.txt',"Welcome to LPU Node Classes today we will study.");

fs.appendFileSync('read.txt', " Appended some DATA to the file.")

const buf_data = fs.readFileSync('read.txt');
//Node JS includes additional data type called BUFFER
//Buffer is mainly used to store binary data

org_data = buf_data.toString();
console.log("Org_data : ", org_data); //Typecasting to string
console.log("Buf_data : ", buf_data);
const fs = require("node:fs");

fs.writeFileSync('Rituraj.txt', 'My name is Rituraj Goswami and My roll numeber is 04. ');
console.log("File Created Successfully");

fs.appendFileSync('Rituraj.txt', " Appended some DATA to the file.")
console.log("File Updated Successfully");

const fileData = fs.readFileSync('Rituraj.txt', 'utf8');
console.log(fileData);
console.log("File Read Successfully");

fs.renameSync('Rituraj.txt', 'lpu.txt');
console.log("File Renamed Successfully")
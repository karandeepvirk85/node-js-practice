// Simple Function Using Node
function sayHello(name) {
    console.log(`Hello ${name}`);
}

// Global Function availabe in all modules
setTimeout(function () {
    sayHello("World");
}, 3000);

// structure of module object
console.log(module);
// Get this file name
console.log(__filename);
// Get this directory name
console.log(__dirname);

const AppUrl = require("./baseurl");
// Get baseurl module.
console.log(AppUrl);

// Modules Used Often
// FileSystem, OS, Process, Streams, HTTP, Paths, Query Strings

//Predefined Modules loads without back slash

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);

const OS = require("os");
console.log(`Host Name :${OS.hostname()}`);
console.log(`Free Memory :${OS.freemem()}`);
console.log(`Free Memory :${OS.version()}`);

const fs = require("fs");

fs.readdirSync("./");

fs.readdir("./", function (error, files) {
    if (!error) {
        console.log(files);
    }
});

// Emiiter
// Load Module and save it into constant only so it don't get over ride by mistake
const Logger = require("./logger");

const logger = new Logger();

logger.loginUser("HELLO");

logger.on("MessageRead", (args) => {
    console.log("Listner Called", args);
});

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/api/courses/") {
        res.write("<h1>Courses</h1>");
        res.end();
    }
});
server.listen(4000);

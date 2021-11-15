// Emiiter
const EventEmmitter = require("events");
class Logger extends EventEmmitter {
    loginUser(message) {
        //send an http request for login
        console.log("Hey" + message);
        // Raise an Event
        this.emit("MessageRead", { id: 1, url: "http://" });
    }
}

module.exports = Logger;

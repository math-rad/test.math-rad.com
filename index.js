const express = require("express");
const serverConfig = require("./server-config.json");

const myApp = express();

myApp.get("/", (request, response) => {
    const URL = request.url;
    return `HI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n ${URL}`
})

myApp.listen(serverConfig["application-port"]);
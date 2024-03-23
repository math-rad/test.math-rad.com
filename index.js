const express = require("express");
const serverConfig = require("./server-config.json");

const myApp = express();

myApp.get("/", (request, response) => {
    const URL = request.url;
    response.send(`HI!!!!!!!!!!!!! ${request.url}`)
})

myApp.listen(serverConfig["application-port"]);
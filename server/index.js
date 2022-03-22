const http = require("http");
const express = require("express");
const cors = require("cors");
const { config } = require("./config");
const {
    getInputs,
} = require("./api");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));


app.get("/getinputs", (_, res) => {
    res.send(getInputs());
})













const server = http.createServer(app);
// server.writeHead({"Cache-Control": "max-age=0, no-cache, no-store, must-revalidate"})

server.listen(config().server_port);
console.log(`SWAT Server Listening on Port ${config().server_port}`);
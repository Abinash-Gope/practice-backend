let http = require("http");

let server = http.createServer((req, res) => {
    console.log("hey")
    res.end("ok got it")
});

server.listen(3000, () => {
    console.log("server chalu hai 3000 pe")
})
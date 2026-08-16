let http = require("http");

let server = http.createServer((req, res) => {
    console.log("hello im server")
    res.end("ok mene tumhari baat sunli")
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});
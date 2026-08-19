// let http = require("http");

// let server = http.createServer((req, res) => {
//     if(req.url === "/users"){
//         res.end("me users me hu")
//     }
//     if(req.url === "/home"){
//         res.end("me home me hu")
//     }
//     if(req.url === "/carts"){
//         res.end("me carts me hu")
//     }
//     if(req.url === "/"){
//         res.end("me end me hu")
//     }
// });

// server.listen(3000, () => {
//     console.log("server chalu hai 3000 pe")
// })

const express = require("express");

const app = express();

app.get("/", (req,res) => {
  res.send("Hey you reached here")
})

let port = 30;

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
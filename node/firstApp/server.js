// import / require http module
const http = require('http');
const os = require('os');

//creating server 
const server = http.createServer((req, res) => {

    // res.end(JSON.stringify({
    //     data: "Hello world "
    // }));

    res.end(JSON.stringify({
        // username: os.userInfo().username
        // platform: os.platform()
        // tempdir: os.tmpdir()
        networkInterfaces: os.networkInterfaces()
    }))
})
// https://mirzaleka.medium.com/the-practical-use-cases-of-the-os-module-in-node-js-385269a19ec3
// console.log(typeof server)
// console.log(os.userInfo().username)
// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.tmpdir())
console.log(os.networkInterfaces())

//call server
server.listen(5001, () => {
    console.log("Server start on 5001 port")
})
// http://127.0.0.1:5001/
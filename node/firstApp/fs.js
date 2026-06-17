const fs = require('fs');
const { readFile } = require('fs/promises');

let content = " Hello, we are learning node js."

// // readFile
// fs.readFile('temp.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`Data : ${data}`)
// })
// readFile

try {

    let data = fs.readFileSync('temp.txt', 'utf8')
    console.log(`Data : ${data}`)
}
catch (err) {
    console.log(err)
}

// // sync
// try {
//     fs.writeFileSync('tempSync.txt', content)
// }
// catch (err) {
//     console.log(err)
// }

// //async
// fs.writeFile('temp.txt', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File write successfully...")
// })
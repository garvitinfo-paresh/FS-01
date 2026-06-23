/**
 * ---------------
 *   File System
 * ---------------
 *
 *  The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
 *
 *
 * --------------------------------
 *   Important method of fs module
 * --------------------------------
 *
 *     ----------------------------------               ----------------------------------------
 *              Method	                                            Description
 *     ----------------------------------               ----------------------------------------
 *    fs.readFile(fileName [,options], callback)	        Reads existing file.
 *    fs.writeFile(filename, data[, options], callback)	    Writes to the file. If file exists then overwrite the content otherwise creates new file.
 *    fs.open(path, flags[, mode], callback)	            Opens file for reading or writing.
 *    fs.rename(oldPath, newPath, callback)	                Renames an existing file.
 *    fs.chown(path, uid, gid, callback)	                Asynchronous chown.
 *    fs.stat(path, callback)	                            Returns fs.stat object which includes important file statistics.
 *    fs.rmdir(path, callback)	                            Renames an existing directory.
 *    fs.mkdir(path[, mode], callback)	                    Creates a new directory.
 *    fs.readdir(path, callback)	                        Reads the content of the specified directory.
 *    fs.utimes(path, atime, mtime, callback)	            Changes the timestamp of the file.
 *    fs.exists(path, callback)	                            Determines whether the specified file exists or not.
 *    fs.access(path[, mode], callback)               	    Tests a user's permissions for the specified file.
 *    fs.appendFile(file, data[, options], callback)	    Appends new content to the existing file.
 *

 * ---------      -------------------------------------------------
 *   Flag	                          Description
 * ---------      -------------------------------------------------
 *    r	            Open file for reading. An exception occurs if the file does not exist.
 *    r+	        Open file for reading and writing. An exception occurs if the file does not exist.
 *    rs	        Open file for reading in synchronous mode.
 *    rs+	        Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
 *
 *    w	            Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 *    wx	        Like 'w' but fails if path exists.
 *    w+	        Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 *    wx+	        Like 'w+' but fails if path exists.
 *
 *     a	        Open file for appending. The file is created if it does not exist.
 *    ax	        Like 'a' but fails if path exists.
 *    a+	        Open file for reading and appending. The file is created if it does not exist.
 *    ax+	        Like 'a+' but fails if path exists.
 *
 */
// const fs = require('fs');

// let dir = __dirname;
//windows ->
// let myPath = 'D:\FS_JS\node\firstApp';   // static path

// try {
//     let myState = fs.statSync(dir);
//     console.log(myState)
// }
// catch (err) {
//     console.log(err)
// }


// let content = " Hello, we are learning node js."

// // readFile
// fs.readFile('temp.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`Data : ${data}`)
// })
// readFile


// try {
//     let data = fs.readFileSync('temp.txt', 'utf8')
//     console.log(`Data : ${data}`)
// }
// catch (err) {
//     console.log(err)
// }

// // sync
// try {
//     fs.writeFileSync('tempSync.txt', content)
// }
// catch (err) {
//     console.log(err)
// }

// //async
// fs.writeFile('temp1.txt', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File write successfully...")
// })

//Rename File
// fs.rename('test.txt', 'temp.txt', (err) => {
//     if (err)
//         console.log(err)
//     console.log('File Renamed')

// })
//Append File
// fs.appendFile('temp.txt', "i am append this text to temp file..", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File append successfully...")
// })

// let dir = __dirname;
//windows ->
// let myPath = 'D:\FS_JS\node\firstApp';   // static path

// console.log(dir)
// let tempPath = dir + '\\temp\\newTemp.txt'
// console.log(tempPath)

// fs.readdir(dir, (err, logs) => {
//     if (err)
//         console.log(err)
//     console.log(logs)
// })


// fs.stat(tempPath, (err, stats) => {
//     if (err)
//         console.log(err)
//     console.log(stats)
// })

// fs.unlink(tempPath, (err) => {
//     if (err)
//         console.log(err)
//     console.log("File Deleted Succefully.. ")
// })
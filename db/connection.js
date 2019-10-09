const mongoose = require('mongoose')
// let mongoURI = "";
mongoose.Promise = Promise
// global.Promise = require('bluebird');
// async function test() {
//   // No unhandled rejection!
//   await Promise.reject(new Error('test'));
// }
// // Prints "false"
// console.log(test().catch(() => {}) instanceof require('bluebird'));
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/favArtist";
}

mongoose.connect(mongoURI,{ useNewUrlParser: true}, () => {
    console.log("We connected!!!")
  })

module.exports = mongoose
const mongoose = require('mongoose')
let mongoURI = "";

global.Promise = require('bluebird');
async function test() {
  // No unhandled rejection!
  await Promise.reject(new Error('test'));
}
// Prints "false"
console.log(test().catch(() => {}) instanceof require('bluebird'));
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/favArtist";
}

mongoose.connect('mongodb://localhost/favArtists',{ useNewUrlParser: true,useUnifiedTopology: true,
useFindAndModify: false}, () => {
    console.log("We connected!!!")
  })

mongoose.Promise = Promise
module.exports = mongoose
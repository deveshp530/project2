const mongoose = require('mongoose')
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/favArtist";
}

mongoose.connect('mongodb://localhost/favArtists',{ useNewUrlParser: true }, () => {
    console.log("We connected!!!")
  })

mongoose.Promise = Promise
module.exports = mongoose
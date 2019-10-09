const mongoose = require('mongoose')
mongoose.Promise = Promise


let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/favArtist";
}

mongoose.connect('mongodb://localhost/favArtists',{ useNewUrlParser: true,useUnifiedTopology: true,
useFindAndModify: false}, () => {
    console.log("We connected!!!")
  })

  module.exports = mongoose
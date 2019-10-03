const mongoose = require('../db/connection')

const ArtistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    dob: String,
    songs: [String]
})

const Artist = mongoose.model('Artist',ArtistSchema)
module.exports = Artist
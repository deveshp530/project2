const mongoose = require('../db/connection')

const ArtistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    dob: String,
    recentAlbum: String
})

const Artist = mongoose.model('Artist',ArtistSchema)
module.exports = Artist
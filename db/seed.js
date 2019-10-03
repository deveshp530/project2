const Artist = require('../models/artist')
const seedData = require('./seed.json')

Artist.deleteMany({}).then(()=>{
    return Artist.insertMany(seedData)
}).then(()=>{
    console.log('got your favorite artists');
    process.exit()
})
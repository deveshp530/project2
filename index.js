const express = require('express')
const app = express()
const artistController = require('./controllers/artist')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

app.set('view engine','hbs')
app.use(cors())
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))


app.use('/', artistController)

//app.listen(3000,()=>console.log('on port 3000'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
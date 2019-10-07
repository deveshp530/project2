const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

router.delete('/:id',(req,res)=>{
    Artist.findOneAndDelete({_id: req.params.id})
    .then(()=>{
        res.redirect('/')
    })
})

router.post('/',(req,res)=>{
    Artist.create(req.body)
    .then(artist=>{
        res.redirect('/')
    })
})

router.put('/edit/:id',(req,res) =>{
    Artist.findOneAndUpdate({_id: req.params.id},req.body)
    .then(artist =>{
        artist.songs.push(req.body)
        artist.save()
        res.redirect('/')
    })
})

router.get('/',(req,res)=>{
    Artist.find({}).then(artist =>{
        res.render('index',{artist})
    })
})

router.get('/edit/:id',(req,res) =>{
    Artist.findOne({_id: req.params.id})
    .then(artist =>{
        res.render('edit',artist)
    })
})

router.get('/new',(req,res)=>{
    res.render('new')
})
router.get('/:id',(req,res)=>{
    Artist.findOne({_id: req.params.id}).then(artist =>{
        res.render('show',artist)
    })
})

module.exports = router
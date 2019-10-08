const express = require('express')
const router = express.Router()
const Artist = require('../models/artist')

router.delete('/:id',(req,res)=>{
    Artist.findOneAndDelete({_id: req.params.id})
    .then(()=>{
        // res.json(artist)
        res.redirect('/')
    })
})

router.post('/',(req,res)=>{
    Artist.create(req.body)
    .then(artist=>{
        // res.json(artist)
        res.redirect('/')
    })
})

router.put('/:id',(req,res) =>{
    Artist.findOneAndUpdate({_id: req.params.id},req.body,{new: true})
    .then(() =>{
        console.log(req.body);
        // res.json(artist)
        res.redirect('/')
    }).catch(err => console.error(err))
})


router.get('/',(req,res)=>{
    Artist.find({}).then(artist =>{
        // res.json(artist)
        res.render('index',{artist})
    })
})

router.get('/edit/:id',(req,res) =>{
    Artist.findOne({_id: req.params.id})
    .then(artist =>{
        // res.json(artist)
        res.render('edit',artist)
    })
})

router.get('/new',(req,res)=>{
    // res.json(artist)
    res.render('new')
})

router.get('/:id',(req,res)=>{
    Artist.findOne({_id: req.params.id})
    .then(artist =>{
        // res.json(artist)
        console.log(artist);
        res.render('show',artist)
    })
})

module.exports = router
const express = require('express');
const mongoose = require('mongoose');
const schema = require('../Schema/Schema');


const router = express.Router();
const model = new mongoose.model("Todo", schema);


// POST a todo
router.post('/', async (req, res) => {
    const newTodo = new model(req.body)
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error : "Please remember to put title and description in json format"
            })
        } else {
            res.status(200).json({
                message : "new todo created"
            })
        }
    })
})

// POST multiple todo
router.post('/all', async (req, res) => {
    await model.insertMany(req.body, (err) => {
        if (err) {
            res.status(500).json({
                error : "Please remember to put title and description in json format"
            })
        } else {
            res.status(200).json({
                message : "new todos created"
            })
        }
    })
})

// updating a todo
router.put('/:id', async (req, res) => {
    console.log("first"),
    await model.updateOne(
        { _id: req.params.id }, 
        {
            $set: {
              title: "active",
            },
        }, 
        (err) => {
            if (err) {
              res.status(500).json({
                error: "There was a server side error!",
              });
            } else {
              res.status(200).json({
                message: "Todo was updated successfully!",
              });
            }
        }
        );
        console.log("second");
    });
router.delete('/:id', async (req, res) => {})


module.exports = router;
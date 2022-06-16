const express = require('express');
const mongoose = require('mongoose');
const schema = require('../Schema/Schema');


const router = express.Router();
const model = new mongoose.model("Todo", schema);


router.get('/', async (req, res) => {

})
router.get('/:id', async (req, res) => {
    try {}
    catch (err) {}
})

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
router.put('/:id', async (req, res) => {
    try {}
    catch (err) {}
})
router.delete('/:id', async (req, res) => {
    try {}
    catch (err) {}
})


module.exports = router;
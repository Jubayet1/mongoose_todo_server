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
router.post('/', async (req, res) => {
    const newTodo = new model(req.body)
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                erroe : "server side error"
            })
        } else {
            res.status(200).json({
                message : "new todo created"
            })
        }
    })
})
router.post('/all', async (req, res) => {
    try {}
    catch (err) {}
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
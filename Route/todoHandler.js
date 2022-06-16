const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await res.send("hi there")
    }
    catch (err) {}
})
router.get('/:id', async (req, res) => {
    try {}
    catch (err) {}
})
router.post('/', async (req, res) => {
    try {}
    catch (err) {}
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
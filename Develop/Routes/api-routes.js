const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
let db = require("../db/db.json")
router.get('/notes', async (req, res) => {
     db= JSON.parse(fs.readFileSync ('./db/db.json', 'utf8')) || [];
    res.json(db);
});

router.post('/notes', (req, res) => {
     db= JSON.parse(fs.readFileSync ('./db/db.json', 'utf8')) || []
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    db.push(newFeedback);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    console.log('Note saved!',db)
    res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    let data = fs.readFileSync('./db/db.json', 'utf8');
    const dataJSON = JSON.parse(data);
    const newData = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    res.json(newData);
});

module.exports = router;
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('api/notes', async (req, res) => {
    const dbJSON = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    dbJSON.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(dbJSON));
    res.json(dbJSON);
});

router.delete('api/notes/:id', (req, res) => {
    let data = fs.readFileSync('./db/db.json', 'utf8');
    const dataJSON = JSON.parse(data);
    const newData = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    res.json(newData);
});

module.exports = router;
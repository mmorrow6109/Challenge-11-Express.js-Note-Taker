const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const dbGet = await fs.readFileSync('db/db.json', 'utf8');
    res.json(dbGet);
});

router.post('/api/notes', (req, res) => {
    const dbPost = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    dbJSON.push(newFeedback);
    fs.writeFileSync('./db/db.json', JSON.stringify(dbPost));
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
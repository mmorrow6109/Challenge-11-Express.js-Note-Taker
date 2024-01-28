const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/Public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/Public/notes.html'));
});

module.exports = router;
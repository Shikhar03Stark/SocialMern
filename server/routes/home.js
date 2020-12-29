const express = require('express');
const router = express.Router();


//GET /
router.get('/', (req, res) => {
    res.json({
        staus: 200,
    });
});

module.exports = router;
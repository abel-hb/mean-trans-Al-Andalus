const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.send('Hello Word Users');
})
  module.exports = router;
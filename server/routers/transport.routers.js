const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.send('Hello Word Transport');
})
  module.exports = router;

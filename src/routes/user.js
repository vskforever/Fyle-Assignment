const express = require('express');
const router = express.Router();

// Mock User Route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'User endpoint working!' });
});

module.exports = router;
 
 

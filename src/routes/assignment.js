const express = require('express');
const router = express.Router();

// Mock Assignment Route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Assignment endpoint working!' });
});

module.exports = router;

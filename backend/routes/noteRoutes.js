const express = require('express');
const router = express.Router({ mergeParams: true });

const protect = require('../middleware/authMiddleware');
const { getNotes } = require('../controllers/noteController');
const { addNote } = require('../controllers/noteController');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;

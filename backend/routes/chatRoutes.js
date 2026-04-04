const express = require('express');
const router = express.Router();
const { generateResponse, getHistory, deleteHistory, analyzeFace } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

// Define routes and protect them with the 'protect' middleware
router.route('/').post(protect, generateResponse);
router.route('/analyze-face').post(protect, analyzeFace);
router.route('/history').get(protect, getHistory);
router.route('/history/:id').delete(protect, deleteHistory);

// Test route to check if the API is working
router.route('/test').get((req, res) => {
  res.json({ message: 'Chat API is working!' });
});

module.exports = router;
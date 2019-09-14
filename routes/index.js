const router = require('express').Router();
const results = require('../controllers/result.controller');

router.post('/submit', results.submit);
router.get('/history', results.history);

module.exports = router;
const router = require('express').Router();
const questions = require('../controllers/questions');
const results = require('../controllers/result');

router.get('/questions', questions.getQuestions);
router.post('/submit', results.submit);
router.get('/history', results.history);

module.exports = router;
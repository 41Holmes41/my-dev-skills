const express = require('express');
const router = express.Router();
const skillsCtlr = require('../controllers/skills');

router.get('/', skillsCtlr.getAll);

module.exports = router;
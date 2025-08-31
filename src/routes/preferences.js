const express = require('express');
const router = express.Router();
const preferencesController = require('../controllers/preferencesController');

router.get('/:userId', preferencesController.getPreferences);
router.post('/:userId', preferencesController.savePreferences);

module.exports = router;

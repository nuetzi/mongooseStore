const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js');
const dataController = require('./dataController.js');

// Routes
// Index
router.get('/', dataController.index, viewController.index);

// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome);

// Update
router.put('/:id', dataController.update, viewController.redirectShow);

// Create
router.post('/', dataController.create, viewController.redirectHome);

// Edit
router.get('/:id/edit', dataController.show, viewController.edit);

// Show
router.get('/:id', dataController.show, viewController.show);

// Export router
module.exports = router;
const express = require("express");
const router = express.Router();
const viewController = require("./viewController.js");
const dataController = require("./dataController.js");

// Routes -- INDUCES
// Index
router.get("/", dataController.index, viewController.index);

// New
router.get("/new", viewController.new);

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", dataController.create, viewController.redirectHome);

// Edit
router.get("/:id/edit", dataController.show, viewController.edit);

// Show
router.get("/:id", dataController.show, viewController.show);

// Need a new route for the BUY request
// The PATCH method is used to update the values of the resource properties
// The PATCH method is very similar to the PUT method because it also modifies an
// existing resource. The difference is that for the PUT method, the request body
// contains the complete new version, whereas for the PATCH method, the request body
// only needs to contain the specific changes to the resource,
//specifically a set of instructions describing how that resource should be changed
router.patch('/:id', dataController.buy, viewController.redirectHome);


// Export router
module.exports = router;
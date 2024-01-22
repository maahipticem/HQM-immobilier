const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const homeControllers = require("./controllers/homeControllers");
const appControllers = require("./controllers/appControllers");
const userControllers = require("./controllers/userControllers");

const validateUser = require("./validateur/validateUser");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/homes", homeControllers.browse);
router.get("/apps", appControllers.browse);
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);
router.post("/users", validateUser, userControllers.add);
router.post("/login", validateUser, userControllers.add);

/* ************************************************************************* */

module.exports = router;

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
const checkCredentials = require("./middleware/checkCredentials");
const validateAnnonce = require("./validateur/validateAnnonce");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/homes", homeControllers.browse);
router.get("/apps", appControllers.browse);
router.get("/users", userControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

router.get("/homes/:id", homeControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);
router.post("/users", validateUser, userControllers.add);
router.post("/login", validateUser, userControllers.login);
router.post("/homes", checkCredentials, validateAnnonce, homeControllers.add);

router.put(
  "/homes/:id",
  checkCredentials,
  validateAnnonce,
  homeControllers.edit
);

router.delete("/homes/:id", homeControllers.destroy);
/* ************************************************************************* */

module.exports = router;

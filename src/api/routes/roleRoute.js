const express = require("express");
const {checkForAuthentication, restrictTo} = require("../middlewares/auth")
const {
    handleCreateRole,
    handleGetAllRoles,
    handleGetRoleById,
    handleUpdateRole,
    handleDeleteRole
} = require("../controllers/roleController");

const router = express.Router();

router
    .route("/")
    .post(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleCreateRole) // Create a new role
    .get(handleGetAllRoles);  // Get all roles

router
    .route("/:id")
    .get(handleGetRoleById) // get role by id
    .put(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleUpdateRole)  // update role by id
    .delete(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleDeleteRole) // delete role by id


module.exports = router;
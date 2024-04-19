const express = require("express");
const {checkForAuthentication, restrictTo} = require("../middlewares/auth")
const {
    handleCreateEmployee,
    handleGetAllEmployees,
    handleGetEmployeeById,
    handleUpdateEmployee,
    handleDeleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/")
    .post(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleCreateEmployee)
    .get(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager']), handleGetAllEmployees);

router.route("/:id")
    .get(handleGetEmployeeById)
    .put(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleUpdateEmployee)
    .delete(checkForAuthentication, restrictTo(['Super Admin', 'Admin', 'Manager', 'Assistant Manager', 'HR']), handleDeleteEmployee);


module.exports = router;
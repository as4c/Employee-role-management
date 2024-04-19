const Employee = require("../models/employee");
const Role = require("../models/role");

const {
    validateName,
    validateEmpcode,
    validateEmail,
    validatePhoneNumber
} = require("../validations/employeeValidation");



const handleCreateEmployee = async (req, res) => {
    try {
        const { rid, name, empcode, mail_id, phone_number } = req.body;

        // Validate name
        if (!validateName(name)) {
            return res.status(400).json({ message: "Employee name is required" });
        }

        // Validate empcode
        if (!validateEmpcode(empcode)) {
            return res.status(400).json({ message: "Invalid employee code format" });
        }

        // Validate mail_id
        if (!validateEmail(mail_id)) {
            return res.status(400).json({ message: "Invalid email address" });
        }

        // Validate phone_number
        if (!validatePhoneNumber(phone_number)) {
            return res.status(400).json({ message: "Invalid phone number format" });
        }

        // Check if email is already in use
        const existingEmail = await Employee.findOne({ mail_id });
        if (existingEmail) {
            return res.status(400).json({ message: "Email address is already in use" });
        }

        // Check if employee code is already in use
        const existingEmpcode = await Employee.findOne({ empcode });
        if (existingEmpcode) {
            return res.status(400).json({ message: "Employee code is already in use" });
        }

        // Check if phone number is already in use
        const existingPhoneNumber = await Employee.findOne({ phone_number });
        if (existingPhoneNumber) {
            return res.status(400).json({ message: "Phone number is already in use" });
        }

        // Create employee if all validation passes
        const result = await Employee.create({
            rid,
            name,
            empcode,
            mail_id,
            phone_number
        });

        return res.json({
            id: result._id,
            message: "Employee created!"
        });
    } catch (error) {
        console.error("Error creating Employee:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


const handleGetAllEmployees = async (req, res) => {
    try {
        const Employees = await Employee.find();
        return res.json(Employees);
    } catch (err) {
        console.log('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}

const handleGetEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Employee.findOne({ _id: id });
        if (!result) {
            return res.status(404).json({ error: "Employee not found." });
        }
        return res.json(result);
    } catch (err) {
        console.log('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}

const handleUpdateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.find({ _id: id })
        if (!employee[0]) {
            return res.status(404).json({ error: "Employee not found." })
        }
        const updated = await Employee.updateOne({ _id: id }, req.body);

        if (!updated.acknowledged) {
            return res.status(400).json({ error: "No updates were made!" });
        } else {
            return res.json({ id: id, message: 'Employee Updated!' });
        }
    } catch (err) {
        console.error('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}

const handleDeleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.find({ _id: id })
        if (!employee[0]) {
            return res.status(404).json({ error: "Employee not found." })
        }
        const deleted = await Employee.deleteOne({ _id: id });

        if (deleted.acknowledged) {
            return res.json({ message: 'Employee Deleted!' });
        } else {
            return res.status(400).json({ error: "No Employee deleted!" });
        }
    } catch (err) {
        console.error('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}

const getEmployeeRoles = async (req, res) => {
    try {
        // Fetch all employees 
        const employees = await Employee.find();

        // Extracting employee names and role names
        const result = [];
        for (const emp of employees) {
            try {
                const role = await Role.findById(emp.rid);
                if (!role) {
                    console.error(`Role with id ${emp.rid} not found`);
                    continue;
                }
                const res = {
                    emp_name: emp.name,
                    role_name: role.role_name
                };
                result.push(res);
            } catch (error) {
                console.error("Error retrieving role:", error);
                continue;
            }
        }

        return res.json(result);
    } catch (error) {
        console.error("Error retrieving employee roles:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    handleCreateEmployee,
    handleGetAllEmployees,
    handleGetEmployeeById,
    handleUpdateEmployee,
    handleDeleteEmployee,
    getEmployeeRoles,
};


const Employee = require("../models/employee");
const Role = require("../models/role");
const {setUser, getUser} = require("../services/auth")

const handleLogin = async(req, res) => {
    try {
        const { mail_id, empcode } = req.body;

        // Validate the provided credentials against your database
        const user = await Employee.findOne({ mail_id });

        // If user not found or invalid password, return unauthorized
        if (!user || user.empcode !== empcode) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = setUser(user)

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    handleLogin,
}
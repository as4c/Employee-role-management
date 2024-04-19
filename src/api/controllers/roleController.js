const Role = require("../models/role");

const handleCreateRole = async (req, res) => {
    try {
        const body = req.body;
        if (!body.role_name || body.role_name === "" || body.role_name === " ") {
            return res.status(400).json({ message : "role name is required" });
        }

        const result = await Role.create({
            role_name: body.role_name
        });

        return res.json({ 
            id: result._id,
            message : "Role created!"
         });
    } catch (error) {
        console.error("Error creating role:", error);
        return res.status(500).json({ message : "Internal server error" });
    }
}


const handleGetAllRoles = async(req, res) => {
    try {
        const roles = await  Role.find();
        return res.json(roles);
    } catch (err) {
        console.log('ERROR:', err);
        return res.status(500).json({message:"Server Error"}); 
    }
}

const handleGetRoleById = async(req, res) => {
    try {
        const  id = req.params.id;
        const result = await  Role.findOne({ _id: id });
        return res.json(result);
    } catch (err) {
        console.log('ERROR:', err);
        return res.status(500).json({message:"Server Error"}); 
    }
}

const handleUpdateRole = async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Role.updateOne({ _id: id }, req.body);
       
        if (updated.modifiedCount == 0) {
            return res.status(400).json({ error: "No updates were made" });
        } else {
            return res.json({ message: 'Role Updated!' });
        }
    } catch (err) {
        console.error('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}

const handleDeleteRole = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Role.deleteOne({ _id: id });
        
        if(deleted.acknowledged){
            return res.json({ message: 'Role Deleted!' });
        }else{
            return res.status(400).json({ error: "No role deleted!" });
        }
    } catch (err) {
        console.error('ERROR:', err);
        return res.status(500).json({ message: "Server Error" });
    }
}


module.exports = {
    handleCreateRole,
    handleGetAllRoles,
    handleGetRoleById,
    handleUpdateRole,
    handleDeleteRole
};


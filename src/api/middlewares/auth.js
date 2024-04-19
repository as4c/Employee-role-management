const Employee = require("../models/employee");
const Role = require("../models/role");
const {getUser} = require("../services/auth");

function checkForAuthentication(req, res, next){
   
    const authorizationHeaderToken = req.headers.authorization;
    req.user = null;
    if(!authorizationHeaderToken ||
        !authorizationHeaderToken.startsWith('Bearer ')){
            return res.status(401).json({ message: 'Access token is required' });
    }

    const token = authorizationHeaderToken.split("Bearer ")[1];

    const user = getUser(token);

    req.user = user;
    return next();

}

function restrictTo(roles=[]){
    return async function(req, res, next) {
       
        if(!req.user) return res.status(401).json({ message: 'UnAuthorized' });

        const employee = await Employee.findOne({mail_id : req.user.mail_id});
        
        const empRole = await Role.findOne({_id : employee.rid});
        
        if(!roles.includes(empRole.role_name)) return res.end("UnAuthorized");

        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
}
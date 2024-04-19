
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const setUser = (user) => {
  
    return jwt.sign({
        _id : user._id,
        mail_id : user.mail_id,
        empcode : user.empcode,
        phone_number : user.phone_number,
    }, secret, { expiresIn: '1h' });
}

const getUser = (token) => {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
    
}

module.exports = {
    setUser,
    getUser
};
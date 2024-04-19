
// Validate employee name
const validateName = (name) => {
    return !!name && name.trim() !== "";
};

// Validate employee code
const validateEmpcode = (empcode) => {
    return !!empcode && /^[a-zA-Z0-9]+$/.test(empcode && empcode.length > 6);
};

// Validate email address
const validateEmail = (email) => {
    return !!email && /\S+@\S+\.\S+/.test(email);
};

// Validate phone number
const validatePhoneNumber = (phoneNumber) => {
    return !!phoneNumber && /^[0-9]+$/.test(phoneNumber) && phoneNumber.length <= 10;
};

module.exports = {
    validateName,
    validateEmpcode,
    validateEmail,
    validatePhoneNumber
};

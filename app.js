
require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./src/config/dbConfig");
const roleRouter = require("./src/api/routes/roleRoute");
const empRouter = require("./src/api/routes/employeeRoute");
const authRouter = require("./src/api/routes/authRoute");
const {getEmployeeRoles} = require("./src/api/controllers/employeeController");

const app = express();
const PORT = process.env.PORT || 8000;

// Database connectivity
connectToMongoDB(process.env.MONGO_URL)
    .then(()=> {
        console.log("MongoDB Connected!");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    })

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use("/api/roles", roleRouter); // roles related routes
app.use("/api/employees", empRouter); // employee related router
app.use("/api", authRouter); // api general routers
app.use("/api/employee-role", getEmployeeRoles)

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));


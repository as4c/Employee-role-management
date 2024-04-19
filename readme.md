# Employee-role management
### API Documentation

This documentation provides details on the endpoints available in the system.

---

#### Roles Endpoints

1. **Retrieve all roles**
   - **Endpoint**: `GET /api/roles`
   - **Description**: Retrieves a list of all roles in the system.
   - **Response**: Returns a JSON array containing role objects.

2. **Retrieve a specific role by ID**
   - **Endpoint**: `GET /api/roles/:id`
   - **Description**: Retrieves a specific role by its unique identifier.
   - **Parameters**:
     - `id`: Unique identifier of the role.
   - **Response**: Returns a JSON object representing the role.

3. **Create a new role**
   - **Endpoint**: `POST /api/roles`
   - **Description**: Creates a new role in the system.
   - **Request Body**: JSON object containing details of the new role.
   - **Response**: Returns a JSON object representing the newly created role.

4. **Update an existing role**
   - **Endpoint**: `PUT /api/roles/:id`
   - **Description**: Updates an existing role with the specified ID.
   - **Parameters**:
     - `id`: Unique identifier of the role to be updated.
   - **Request Body**: JSON object containing updated details of the role.
   - **Response**: Returns a JSON object representing the updated role.

5. **Delete a role**
   - **Endpoint**: `DELETE /api/roles/:id`
   - **Description**: Deletes a role with the specified ID from the system.
   - **Parameters**:
     - `id`: Unique identifier of the role to be deleted.
   - **Response**: Returns a success message upon successful deletion.

---

#### Employees Endpoints

1. **Retrieve all employees**
   - **Endpoint**: `GET /api/employees`
   - **Description**: Retrieves a list of all employees in the system.
   - **Response**: Returns a JSON array containing employee objects.

2. **Retrieve a specific employee by ID**
   - **Endpoint**: `GET /api/employees/:id`
   - **Description**: Retrieves a specific employee by their unique identifier.
   - **Parameters**:
     - `id`: Unique identifier of the employee.
   - **Response**: Returns a JSON object representing the employee.

3. **Create a new employee**
   - **Endpoint**: `POST /api/employees`
   - **Description**: Creates a new employee in the system.
   - **Request Body**: JSON object containing details of the new employee.
   - **Response**: Returns a JSON object representing the newly created employee.

4. **Update an existing employee**
   - **Endpoint**: `PUT /api/employees/:id`
   - **Description**: Updates an existing employee with the specified ID.
   - **Parameters**:
     - `id`: Unique identifier of the employee to be updated.
   - **Request Body**: JSON object containing updated details of the employee.
   - **Response**: Returns a JSON object representing the updated employee.

5. **Delete an employee**
   - **Endpoint**: `DELETE /api/employees/:id`
   - **Description**: Deletes an employee with the specified ID from the system.
   - **Parameters**:
     - `id`: Unique identifier of the employee to be deleted.
   - **Response**: Returns a success message upon successful deletion.

---

#### Employee Role Endpoint

1. **Retrieve employee names and role names**
   - **Endpoint**: `GET /api/employee-role`
   - **Description**: Retrieves the names of employees along with their corresponding role names.
   - **Response**: Returns a JSON object containing employee names and their respective role names.

---

#### User Login Endpoint

1. **User login**
   - **Endpoint**: `POST /api/login/`
   - **Description**: Authenticates a user and returns a token for accessing secured endpoints.
   - **Request Body**: JSON object containing user credentials (e.g., username, password).
   - **Response**: Returns a JSON object containing an authentication token.

---

### Technology Stack

- **Node.js**: A JavaScript runtime environment for executing server-side code.
- **Express.js**: A minimalist web framework for Node.js, used for building APIs and web applications.
- **Database**: MongoDB, a NoSQL database, is used for storing data in a document-oriented format.

### Cloning Instructions

To clone this repository and run the API locally, follow these steps:

1. Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. Install MongoDB on your machine. You can find installation instructions [here](https://docs.mongodb.com/manual/installation/).
3. Clone the repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

4. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

5. Install the dependencies using npm:

   ```
   npm install
   ```

6. Start the MongoDB service on your machine.
7. Start the Node.js server:

   ```
   npm start
   ```

8. The API should now be running locally on your machine, and you can access the endpoints as described in the documentation.

---

### Note
- All endpoints require proper authentication and authorization for access, except the login endpoint.
- Ensure to handle errors gracefully and provide appropriate error responses for invalid requests or unauthorized access.
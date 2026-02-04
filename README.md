#  MongoDB Schema Design & Database Integration

### MongoDB is used as the database, and Mongoose is used as the ODM to manage schemas and database operations.

- Environment variables are managed using dotenv file.

- MongoDB connection string is stored securely in .env

- Database connection is initialized when the server starts.

## User Schema Design 
- A user schema was created using Mongoose to define the structure of user data stored in MongoDB.

### The schema includes:

- user_fname – First name of the user.

- user_lname – Last name of the user.

- user_id – Unique user identifier.

## Backend Logic & Server Flow

- Express server is initialized on Specific port(assigned).

- MongoDB connection is established before handling requests.

- JSON middleware is enabled to handle request bodies.

- User model is imported and ready for database operations.

  ## API Structure (Ready for DB Operations)

- The API structure follows REST principles and is prepared to work with MongoDB models instead of in-memory data.

- Routes are organized for CRUD operations

- Schema-based approach allows easy extensions.

- Clean separation between database config, schema, and server logic.

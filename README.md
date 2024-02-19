
# Auth_Project

Auth_Project is a web application with a backend (api) and a frontend (client). The backend is responsible for authentication and other server-side functionalities, while the frontend handles the user interface.

## Project Structure

```
Auth_Project
|-- api
|   |-- [backend files]
|
|-- client
|   |-- [frontend files]
|
|-- .env
```

- `api`: Contains the backend code.
- `client`: Contains the frontend code.

## Getting Started

### Backend (api)

1. Open the terminal and navigate to the `Auth_Project` folder.
2. Run the following command to install dependencies:

   ```bash
   npm i
   ```

3. Start the backend server:

   ```bash
   npm run dev
   ```

### Frontend (client)

1. Navigate to the `Client` folder:

   ```bash
   cd client
   ```

2. Run the following command to install dependencies:

   ```bash
   npm i
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Environment Variables :

Make sure to create a `.env` file in the root of the `Auth_Project` folder with the following variables:

- `JWT_SECRET`: Secret key for JSON Web Token (JWT) encryption.
- `PORT`: Port number for the server.
- `MONGODB_URI`: MongoDB connection URI.
- `VITE_FIREBASE_API_KEY`: Firebase API key for client-side authentication.

Example `.env` file:

```
JWT_SECRET=mysecretkey
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth_project
VITE_FIREBASE_API_KEY=your-firebase-api-key
```

Replace the values with your specific configurations.




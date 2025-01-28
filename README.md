# GoShop - Full Stack E-Commerce Application

## Overview

GoShop is a full-stack e-commerce application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with a seamless online shopping experience, featuring product categories, authentication, and cart functionalities.

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime for server-side execution.
- **Express.js** - Web framework for building RESTful APIs.
- **MongoDB** - NoSQL database for storing product and user data.
- **Mongoose** - ODM for MongoDB, simplifying database interactions.
- **bcryptjs** - Library for password hashing.
- **jsonwebtoken** - Used for authentication and authorization.
- **cookie-parser** - Parses cookies for session management.
- **cors** - Enables cross-origin resource sharing.
- **dotenv** - Loads environment variables.
- **nodemon** - A development tool for auto-restarting the server.

### Frontend

- **React.js** - Frontend library for building user interfaces.
- **Redux Toolkit** - State management for global data.
- **React Router DOM** - For handling client-side routing.
- **React Toastify** - Provides notifications for user interactions.
- **React Icons** - Used for adding icons to the UI.
- **Moment.js** - Library for date formatting.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Features

- **User Authentication** - Secure login and signup using JWT tokens.
- **Product Listing** - Displays a variety of categories like mobiles, watches, cameras, etc.
- **Shopping Cart** - Users can add and remove items from their cart.
- **Search Functionality** - Allows users to search for products.
- **Responsive Design** - Optimized UI for desktop and mobile devices.
- **Secure Payment Integration** - Future enhancement.

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```

## Environment Variables

Create a `.env` file in the backend directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Running the Application

1. Ensure MongoDB is running.
2. Start the backend and frontend servers.
3. Open `http://localhost:3000` in the browser.

## Future Enhancements

- **Admin Dashboard** for managing products and orders.
- **Payment Gateway Integration**.
- **Order History and Tracking**.

## License

This project is licensed under the ISC License.

## Author

GoShop Commerce Private Limited.


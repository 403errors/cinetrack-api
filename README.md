# CineTrack API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**CineTrack API** is a personal watchlist API for movies, TV series, books, anime, and more. It allows users to track their favorite entertainment items, write reviews, and manage their watchlists.It supports CRUD operations for movies and allows users to create and manage their watchlists and reviews.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User authentication and authorization
- CRUD operations for movies
- User-specific watchlists
- User-specific reviews
- Secure handling of user passwords and JWT tokens
- Track favorite entertainment items (movies, TV series, books, anime, etc.)
- Write reviews
- Manage watchlists

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables

## NPM Packages

- bcrypt: For password hashing.
- dotenv: For loading environment variables.
- express: Web application framework.
- express-mongo-sanitize: For sanitizing user input to prevent MongoDB injection attacks.
- express-rate-limit: For limiting the number of requests to the API.
- helmet: For securing Express apps by setting various HTTP headers.
- hpp: For protecting against HTTP Parameter Pollution attacks.
- jsonwebtoken: For creating and verifying JSON Web Tokens for authentication.
- mongoose: MongoDB object modeling tool.
- morgan: HTTP request logger middleware for Node.js.
- validator: For validating user input.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/403errors/cinetrack-api.git
    cd cinetrack-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    NODE_ENV=development
    PORT=3000
    DATABASE=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRY_TIME=1800
    JWT_COOKIE_EXPIRY_TIME=1800
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

- `NODE_ENV`: The environment in which the application is running (e.g., development, production).
- `PORT`: The port on which the server will run.
- `DATABASE`: The MongoDB connection string.
- `JWT_SECRET`: The secret key for signing JWT tokens.
- `JWT_EXPIRY_TIME`: The expiry time for JWT tokens (in seconds).
- `JWT_COOKIE_EXPIRY_TIME`: The expiry time for JWT cookies (in seconds).

## Usage

1. To run the server in development mode:
    ```bash
    npm run dev
    ```

2. To run the server in production mode:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST /api/v1/users/signup**: Sign up a new user
- **POST /api/v1/users/login**: Log in an existing user
- **GET /api/v1/users/logout**: Log out the current user

### Movies

- **GET /api/v1/movies**: Get all movies
- **POST /api/v1/movies**: Create a new movie (Admin)
- **GET /api/v1/movies/:id**: Get a specific movie by ID
- **PATCH /api/v1/movies/:id**: Update a specific movie by ID (Admin)
- **DELETE /api/v1/movies/:id**: Delete a specific movie by ID (Admin)

### Watchlist

- **GET /api/v1/watchlist**: Get the current user's watchlist
- **POST /api/v1/watchlist**: Add an item to the current user's watchlist
- **DELETE /api/v1/watchlist/:id**: Remove an item from the current user's watchlist

### Reviews

- **GET /api/v1/reviews**: Get all reviews
- **POST /api/v1/reviews**: Create a new review
- **GET /api/v1/reviews/:id**: Get a specific review by ID
- **PATCH /api/v1/reviews/:id**: Update a specific review by ID
- **DELETE /api/v1/reviews/:id**: Delete a specific review by ID

## File Structure

- `app.js` and `server.js`: Main entry points of the application.
- `controllers/`: Contains the controllers that handle the application's logic.
    - `authController.js`: Handles authentication-related logic.
    - `entertainmentController.js`: Handles logic related to entertainment items.
    - `errorController.js`: Handles error handling.
    - `handlerFactory.js`: Factory function for creating generic handlers.
    - `reviewController.js`: Handles logic related to reviews.
    - `userController.js`: Handles logic related to users.
    - `watchlistController.js`: Handles logic related to watchlists.
- `models/`: Contains the Mongoose models for the application's data.
    - `entertainmentModel.js`: Defines the schema for entertainment items.
    - `reviewModel.js`: Defines the schema for reviews.
    - `userModel.js`: Defines the schema for users.
    - `watchlistModel.js`: Defines the schema for watchlists.
- `routes/`: Contains the routes for the application's API.
    - `entertainmentRoutes.js`: Defines the routes for entertainment items.
    - `reviewRoutes.js`: Defines the routes for reviews.
    - `userRoutes.js`: Defines the routes for users.
    - `watchlistRoutes.js`: Defines the routes for watchlists.
- `utils/`: Contains utility functions.
    - `apiFeatures.js`: Utility functions for API features like filtering, sorting, and pagination.
    - `appError.js`: Custom error class for the application.
    - `catchAsync.js`: Utility function for catching errors in asynchronous functions.
- `dev-data/`: Contains development data.
    - `entertainment.json`: Sample entertainment data.
    - `import-dev-data.js`: Script for importing development data into the database.
    - `reviews.json`: Sample review data.
    - `users.json`: Sample user data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

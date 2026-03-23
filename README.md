# Login & Sign Up System

A secure authentication application built with Node.js, Express, and SQLite that allows users to create accounts and log in.

## Features

- **User Registration**: Create new accounts with email and password validation
- **User Login**: Authenticate existing users with email and password
- **SQLite Database**: Secure storage of user credentials
- **Input Validation**: 
  - Email must contain "@"
  - Password must be at least 8 characters long
  - Password confirmation on sign up

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Frontend**: HTML, CSS, JavaScript
- **Port**: 3000

## Installation

1. Clone the repository
```bash
git clone https://github.com/FutureProgrammer30/CSCE-477-HW.git
cd CSCE-477-HW
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

### Sign Up
- Navigate to the sign up page
- Enter your email and password
- Confirm your password
- Click "Sign Up"

### Login
- Enter your email and password
- Click "Log In"

## Security

- Uses parameterized SQL queries to prevent SQL injection attacks
- User passwords are stored in the SQLite database

## File Structure

```
├── server.js       # Express server and API endpoints
├── index.html      # Login page
├── signup.html     # Sign up page
├── styles.css      # Styling for login/signup pages
├── users.db        # SQLite database (auto-created)
└── package.json    # Project dependencies
```

## API Endpoints

### POST /signup
Register a new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

### POST /login
Authenticate a user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

## Author

Renee

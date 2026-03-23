# Login & Sign Up System

A secure authentication application built with Node.js, Express, and SQLite that allows users to create accounts and log in.


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
``

## Usage

Sign Up
- Navigate to the sign up page
- Enter your email and password
- Confirm your password
- Click "Sign Up"

Login
- Enter your email and password
- Click "Log In"

Security
- Uses parameterized SQL queries to prevent SQL injection attacks
- User passwords are stored in the SQLite database


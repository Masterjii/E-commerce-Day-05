
**E-commerce Day - 05: User Authentication and Styling**

This repository documents the development of Day 5 for our E-commerce application, focusing on user authentication and basic styling.

**Project Structure:**

- **views:**
    - **auth:** Contains signup.ejs and login.ejs for user registration and login functionalities.
    - **partials:** Houses reusable components like header.ejs, navbar.ejs, and footer.ejs.
- **routes:**
    - **auth.js:** Handles login, logout, and registration requests.
- **models:**
    - **User.js:** Defines the User schema for storing user data.

**User Authentication:**

- **Security:** Passwords are encrypted using SHA-256 hashing algorithm for stronger security.
- **Salt:** To further enhance security, random salt values are added to passwords before hashing, making them unique even if they're the same.
- **Passport.js and Passport-local-mongoose:** These libraries facilitate authentication workflows and manage user sessions.

**Implementation:**

1. **Authentication Middleware:**
    - `passport.js` is configured as authentication middleware in `app.js`.
    - `LocalStrategy` is used for username and password-based authentication.
    - `User.authenticate()` method verifies user credentials.
    - `serializeUser()` and `deserializeUser()` functions manage user sessions.

2. **User Model:**
    - `User.js` defines the user schema with username, email, and password fields.
    - Password field stores only the hashed value, not the plaintext password.

3. **Authentication Routes:**
    - `auth.js` handles login, logout, and registration requests:
        - Login checks username and password against the database.
        - Register validates and creates new user accounts with hashed passwords.

4. **Views:**
    - `signup.ejs` provides a form for user registration.
    - `login.ejs` handles user login attempts.
    - Partials (`header.ejs`, `navbar.ejs`, `footer.ejs`) create the basic application layout.

**Connect with Me:**

- Share your thoughts and feedback on this project
- Let's connect and exchange ideas on LinkedIn! Visit [https://www.linkedin.com/in/balram-kusharam/](https://www.linkedin.com/in/balram-kusharam/) to join the discussion.


**Stay Updated:**

- Follow this repository for further development progress throughout the E-commerce Day challenge.

I hope this comprehensive README file effectively summarizes your project and its key features. Feel free to customize it further with screenshots, diagrams, or links to resources if needed.

// authentication.js

// Function to register a user and save their data in session history
function registerUser(email, password) {
  // Check if the user already exists in session history
  const existingUser = getSessionUser(email);

  if (existingUser) {
      return false; // User already exists
  }

  // Create a new user object and store it in session history
  const newUser = {
      email,
      password,
  };

  // Store the new user in session history
  addToSessionHistory(newUser);

  return true; // Registration successful
}

// Function to get a user from session history
function getSessionUser(email) {
  const sessionHistory = getSessionHistory();
  return sessionHistory.find((user) => user.email === email);
}

// Function to get the session history from local storage
function getSessionHistory() {
  const sessionHistoryJson = localStorage.getItem('sessionHistory');
  return sessionHistoryJson ? JSON.parse(sessionHistoryJson) : [];
}

// Function to add a user to session history
function addToSessionHistory(user) {
  const sessionHistory = getSessionHistory();
  sessionHistory.push(user);
  localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
}

// Function to authenticate a user based on session history
function authenticateUser(email, password) {
  const user = getSessionUser(email);

  if (user && user.password === password) {
      return true; // Authentication successful
  }

  return false; // Authentication failed
}

// Function to log out a user by clearing session history
function logoutUser() {
  localStorage.removeItem('sessionHistory');
}

import React, { useState } from "react";
import axios from "axios";
import "./UserLogin.css";

function UserLogin({ onUserData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Define an event handler for the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to the API with the username and password
    const response = await axios.post("http://localhost:3005/api/userAccount", {
      sapusername: username,
      sappassword: password,
    });

    // Get the data from the response
    const data = response.data;

    // Check if the count property is equal to 1
    if (data.count === 1) {
      // Call the function passed as a prop from the parent component
      onUserData({ sapusername: username });
      setLoginError("");
    } else if (data.count === 0) {
      // Set the login error message to indicate incorrect username or password
      setLoginError(
        "The username or password you entered is incorrect. Please try again."
      );
    } else if (data.count === 2) {
      // Set the login error message to indicate a duplicate account exists
      setLoginError(
        "A duplicate account exists. Please contact the Homart IT Team for assistance."
      );
    } else {
      // Set the login error message to indicate an unknown error occurred
      setLoginError(
        "An unknown error occurred. Please contact the Homart IT Team for assistance."
      );
    }
  };

  return (
    <div className="parentContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <h2>Sign in</h2>
        {loginError && <div className="error">{loginError}</div>}
        <div className="row">
          <label>Username:</label>
          <input
            className="yellow-background"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="row">
          <label>Password:</label>
          <input
            className="yellow-background"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;

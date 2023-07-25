import React, { useState } from 'react';
import axios from 'axios';

function UserLogin({ onUserData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define an event handler for the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to the API with the username and password
    const response = await axios.post('http://localhost:3005/api/userAccount', {
      sapusername: username,
      sappassword: password,
    });

    // Get the data from the response
    const data = response.data;

    // Check if the count property is equal to 1
    if (data.count === 1) {
      // Call the function passed as a prop from the parent component
      onUserData({ sapusername: username });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default UserLogin;

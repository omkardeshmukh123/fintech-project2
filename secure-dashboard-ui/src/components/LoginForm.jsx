// src/components/LoginForm.jsx
import React, { useState } from 'react'; // Import React and the useState hook

function LoginForm() {
  // Create state variables to hold the email and password
  const [email, setEmail] = useState(''); // Initial value is an empty string
  const [password, setPassword] = useState('');

  // This function will run when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default browser refresh
    alert(`Logging in with Email: ${email} and Password: ${password}`);
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email} // The input's value is tied to our state
          onChange={(e) => setEmail(e.target.value)} // Update state on every keystroke
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password} // The input's value is tied to our state
          onChange={(e) => setPassword(e.target.value)} // Update state on every keystroke
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
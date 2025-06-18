import React from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  return (
    <div className="sections-container">
      <div className="section">
        {/* Login form fields */}
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="section">
        {/* Register form fields */}
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="register-email">Email:</label>
            <input type="email" id="register-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password:</label>
            <input type="password" id="register-password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
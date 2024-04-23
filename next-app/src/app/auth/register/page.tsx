// pages/register.tsx

import React from 'react';
import Layout from './layout';

const Register: React.FC = () => {
  return (
    <Layout>
      <div className="register-container" style={styles.registerContainer}>
        <h2>Register</h2>
        <form className="register-form" style={styles.form}>
          <div className="form-group">
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input type="text" id="username" name="username" required style={styles.input} />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" required style={styles.input} />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input type="password" id="password" name="password" required style={styles.input} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </Layout>
  );
};

const styles = {
  registerContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Register;

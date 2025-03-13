import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Real-time validation
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-glass">
        <div className="login-content">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Please login to continue</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`form-input ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <div className="social-login">
            <p className="divider">Or continue with</p>
            <div className="social-icons">
              <button className="social-button google">
                <FcGoogle className="social-icon" />
              </button>
              <button className="social-button github">
                <FaGithub className="social-icon" />
              </button>
              <button className="social-button facebook">
                <FaFacebook className="social-icon" />
              </button>
            </div>
          </div>

          <div className="additional-options">
            <a href="/forgot-password" className="option-link">Forgot Password?</a>
            <span className="separator">|</span>
            <a href="/signup" className="option-link">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check if any field is empty
    if (!email || !password) {
      toast.error('Both fields are required!', { position: 'top-right' });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'https://portfolio-server-side-e91c.onrender.com/api/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data?.token) {
        toast.success('Login Successful!', { position: 'top-right' });
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      } else {
        toast.error(response.data.message || 'Something went wrong!', { position: 'top-right' });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Server error. Please try again later!', {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to render input fields
  const renderInputField = (type, name, placeholder, icon, value) => (
    <div className="mb-3 input-group">
      <span className={`input-group-text bg-${icon.color}`}>
        <i className={`bi ${icon.class}`}></i>
      </span>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required
      />
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <h2 className="text-primary mt-3 text-center">Login</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {renderInputField('email', 'email', 'Email', { class: 'bi-envelope-fill', color: 'danger' }, formData.email)}
                {renderInputField('password', 'password', 'Password', { class: 'bi-lock-fill', color: 'success' }, formData.password)}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Login'}
                </button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-decoration-none">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

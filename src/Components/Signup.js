
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { username, email, password, confirmPassword } = formData;

  // Check if any field is empty
  if (!username || !email || !password || !confirmPassword) {
    toast.error('All fields are required!', { position: 'top-right' });
    return;
  }

  // Validate password and confirm password
  if (password !== confirmPassword) {
    toast.error('Passwords do not match!', { position: 'top-right' });
    return;
  }

  setLoading(true);
  try {
    const response = await axios.post(
      'https://portfolio-server-side-e91c.onrender.com/api/auth/signup',
      { username, email, password,confirmPassword },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.data?.token) {
      toast.success('Signup Successful!', { position: 'top-right' });
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
            <h2 className="text-success mt-3 text-center">Sign Up</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {renderInputField('text', 'username', 'Name', { class: 'bi-person-fill', color: 'info' }, formData.username)}
                {renderInputField('email', 'email', 'Email', { class: 'bi-envelope-fill', color: 'danger' }, formData.email)}
                {renderInputField('password', 'password', 'Password', { class: 'bi-lock-fill', color: 'success' }, formData.password)}
                {renderInputField(
                  'password',
                  'confirmPassword',
                  'Confirm Password',
                  { class: 'bi-lock-fill', color: 'warning' },
                  formData.confirmPassword
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-decoration-none">
                  Login
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

export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/authService';
import '../styles/LoginPage.css';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGuestAccess = () => {
    // Set a guest flag in localStorage
    localStorage.setItem('isGuest', 'true');
    navigate('/modules');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const session = await authenticateUser(formData.email, formData.password);
      
      // Get the tokens
      const accessToken = session.getAccessToken().getJwtToken();
      const idToken = session.getIdToken().getJwtToken();
      const refreshToken = session.getRefreshToken().getToken();

      // Store tokens in localStorage or secure storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.removeItem('isGuest'); // Remove guest flag if it exists

      // Redirect to website
      navigate('/modules');
    } catch (err) {
      let errorMessage = 'An error occurred';
      
      if (err instanceof Error) {
        // Handle specific Cognito errors
        switch (err.name) {
          case 'NotAuthorizedException':
            errorMessage = 'Incorrect username or password';
            break;
          case 'UserNotConfirmedException':
            errorMessage = 'Please verify your email first';
            break;
          case 'UserNotFoundException':
            errorMessage = 'Account not found';
            break;
          case 'InvalidParameterException':
            errorMessage = 'Invalid email format';
            break;
          default:
            errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Sign in to your account</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-field">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field input-top"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field input-bottom"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="button-container">
            <button
              type="submit"
              disabled={loading}
              className="submit-button"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="auth-links">
            <a href="/forgot-password" className="auth-link">
              Forgot password?
            </a>
            <a href="/signup" className="auth-link">
              Create an account
            </a>
          </div>

          <div className="guest-access">
            <button
              type="button"
              onClick={handleGuestAccess}
              className="guest-button"
            >
              Continue as Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
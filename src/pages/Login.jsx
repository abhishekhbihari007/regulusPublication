import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaUser, FaArrowRight } from 'react-icons/fa'
import './Login.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    organization: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      // Handle login
      alert('Login successful! Redirecting to your portal...')
    } else {
      // Handle registration
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!')
        return
      }
      alert('Account created successfully! Please check your email to verify your account.')
    }
  }

  return (
    <div className="login-page">
      <section className="page-hero">
        <div className="container">
          <h1>{isLogin ? 'Login to Your Portal' : 'Create Portal Account'}</h1>
          <p className="page-subtitle">
            {isLogin 
              ? 'Access your author dashboard, track submissions, and manage your publications'
              : 'Join our publishing community and start your journey as an author'
            }
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="login-container">
            <div className="login-tabs">
              <button 
                className={`tab-button ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button 
                className={`tab-button ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </button>
            </div>

            <div className="login-form-wrapper">
              <form onSubmit={handleSubmit} className="login-form">
                {!isLogin && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>
                          <FaUser className="input-icon" />
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required={!isLogin}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          <FaUser className="input-icon" />
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required={!isLogin}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        <FaUser className="input-icon" />
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization"
                      />
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label>
                    <FaEnvelope className="input-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FaLock className="input-icon" />
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                {!isLogin && (
                  <div className="form-group">
                    <label>
                      <FaLock className="input-icon" />
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="forgot-link">
                      Forgot Password?
                    </Link>
                  </div>
                )}

                {!isLogin && (
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                    </label>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-large btn-full">
                  {isLogin ? 'Login to Portal' : 'Create Account'}
                  <FaArrowRight className="btn-icon" />
                </button>
              </form>

              <div className="login-divider">
                <span>OR</span>
              </div>

              <div className="social-login">
                <button className="social-btn google-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
                <button className="social-btn linkedin-btn">
                  <FaUser />
                  Continue with LinkedIn
                </button>
              </div>
            </div>

            <div className="login-footer">
              <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  className="link-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Create Account' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login


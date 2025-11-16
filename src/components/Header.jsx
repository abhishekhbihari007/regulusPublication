import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch, FaUser, FaGlobe } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top Header Bar - Logo, Login and Search */}
      <div className="top-header-bar">
        <div className="container">
          <div className="top-header-content">
            {/* Left Side: Logo */}
            <div className="top-header-left">
              <Link to="/" className="logo-container">
                <img src="/ChatGPT_Image_Nov_16__2025__05_33_30_PM-removebg-preview.png" alt="Regulus International Publishing House" className="logo-image" />
              </Link>
            </div>

            {/* Right Side: Login and Search Bar */}
            <div className="top-header-right-section">
              <Link to="/login" className="login-button">
                <span>Login/Create Portal Account</span>
                <svg className="login-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </Link>
              
              {/* Search Bar - Just below login */}
              <div className="header-search-section">
                <div className="search-wrapper">
                  <input
                    type="text"
                    placeholder="Search title, author, ISBN..."
                    className="header-search-input"
                  />
                  <select className="search-category">
                    <option>All Products</option>
                    <option>Books</option>
                    <option>Journals</option>
                    <option>E-Collections</option>
                    <option>Authors</option>
                  </select>
                  <button className="search-submit-button" aria-label="Search">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Utility Icons */}
            <div className="mobile-utility-icons">
              <button className="icon-button" aria-label="User Account">
                <FaUser />
              </button>
              <button className="icon-button" aria-label="Search">
                <FaSearch />
              </button>
              <button className="icon-button menu-toggle" onClick={toggleMenu} aria-label="Menu">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-navbar ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/catalog">
                Catalog
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/catalog?genre=fiction">Fiction</Link></li>
                <li><Link to="/catalog?genre=non-fiction">Non-Fiction</Link></li>
                <li><Link to="/catalog?genre=children">Children's Books</Link></li>
                <li><Link to="/catalog?genre=academic">Academic</Link></li>
                <li><Link to="/catalog?genre=biography">Biography</Link></li>
                <li><Link to="/catalog?genre=poetry">Poetry</Link></li>
              </ul>
            </li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header

